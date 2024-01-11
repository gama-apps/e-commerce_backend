import { ApolloServerPluginLandingPageProductionDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import  express  from "express";
import { makeExecutableSchema } from '@graphql-tools/schema';
import {connect} from 'mongoose'
import dotenv from 'dotenv'
import typeDefs from './merge/mergeSchema'
import resolvers from './merge/mergeResolver'

const db: string = process.env.MONGOURL || 'mongodb://localhost:27017/e-commerce';

const connectDB = async () => {
  try {
    await connect(db)
    console.log('DB CONNECTED...');
    
  } catch (error) {
    console.error('DB CONNECTION ERROR:', error);
  }
}

const app: express.Application = express();
app.use(bodyParser.json());
dotenv.config();


const PORT: number = parseInt(process.env.PORT as string, 10) || 9806

async function start(){
  const schema = makeExecutableSchema({ typeDefs: [typeDefs],resolvers })
  
  const apolloServer = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginLandingPageProductionDefault({
        embed: true,
        graphRef: '' //se necesita para colocarle una referencia de tipo a "embed"
      })
    ]
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app: app as any })

  app.listen(PORT, () => {
    console.log(`e-commerce ready at port: http://localhost:${PORT}/graphql`);
    connectDB();
  })
}

start();
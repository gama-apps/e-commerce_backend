import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as path from 'path';

const resolversArray = loadFilesSync(path.join(__dirname, '..', 'resolvers'), { extensions: ['ts'] });


export default mergeResolvers(resolversArray);

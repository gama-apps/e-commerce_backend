import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import * as path from 'path';

const typeArray = loadFilesSync(path.join(__dirname, '..', 'schemas'), { extensions: ['ts'] });

export default mergeTypeDefs(typeArray);


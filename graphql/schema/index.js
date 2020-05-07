import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/';
import typeDefs from '../typeDefs/';
 export const componentSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});


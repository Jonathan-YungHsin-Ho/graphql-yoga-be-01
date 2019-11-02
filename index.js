const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

const options = {
  port: process.env.PORT || 4000,
};

server.start(options, ({ port }) =>
  console.log(
    `\n** Server started, listening on port ${port} for incoming requests **\n`,
  ),
);

const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: {
    Query,
    Mutation
  }
});

server.express.use((req, res, next) => {
  const authorizationHeader = req.get('Authorization');
  if (authorizationHeader) {
    console.log(`Authorization header: ${authorizationHeader}`);
  } else {
    console.log('No authorization header');
  }

  next();
});

server.start(() => console.log('Server running on port 4000.'));

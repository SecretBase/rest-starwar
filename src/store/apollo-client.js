import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:57725"
});

export default client;

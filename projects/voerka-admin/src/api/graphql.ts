import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
// dev
import.meta.env.DEV && (globalThis.$grapqhl = client);

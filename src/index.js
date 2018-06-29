import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";

import client from "./store/apollo-client";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

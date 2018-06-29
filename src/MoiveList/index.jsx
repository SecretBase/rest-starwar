import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import MoiveList from "./MoiveList";

const MoiveListFetch = () => {
  return (
    <Query
      query={gql`
        {
          allFilms {
            films {
              id
              title
              openingCrawl
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading ...";
        if (error) return "error";
        return <MoiveList moives={data.allFilms.films} />;
      }}
    </Query>
  );
};

export default MoiveListFetch;

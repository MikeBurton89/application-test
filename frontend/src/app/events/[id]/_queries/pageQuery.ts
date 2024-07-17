import { gql } from "@apollo/client";

const pageQuery = gql`
  query ($id: ID!) {
    node(id: $id) {
      id
      ... on Event {
        name
        date
        program {
          startTime
          endTime
          speaker
          topic
        }
      }
    }
  }
`;

export default pageQuery;

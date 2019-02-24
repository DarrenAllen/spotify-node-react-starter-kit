
import gql from "graphql-tag";

const query = gql`
    query Artist($q: String!, $user: String!, $type: String!){
      items:search(user:$user, q:$q, type: $type) {
        ... on Track {
          name
          id
          artists {
            name
          }
        }
        ... on Artist {
          name
        }
      }
    }`;



export default query;


import gql from "graphql-tag";
const qResult = `
... on Track {
  name
  id
  artists {
    name
  }
}
... on Artist {
  name
}`;

const query = gql`
  query Top($user: String!, $type: String!){
    short_term:getTop(time_range:"short_term", user:$user, type:$type) {
      ${qResult}
    }
    medium_term:getTop(time_range:"medium_term", user:$user, type:$type) {
      ${qResult}
    }
    long_term:getTop(time_range:"long_term", user:$user, type:$type) {
      ${qResult}
    }
  }`;

export default query
import React, { Component } from 'react';
import { Query } from "react-apollo";
import getTop from "../queries/getTop"
import {UserConsumer} from '../context'

import Track from "./Track"
import Artist from "./Artist"
class Tops extends Component {

  render() {
    return (
      <UserConsumer>
        {
          (context) => {
            return (
              <ul>
                <Query query={getTop} variables={{user:context.user, type:this.props.type}}>

                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error</p>;
                  return data[this.props.term].map(data => {
                    if(this.props.type === "artist"){
                      {/* return (<Artist data={data} />) */}
                      return (<div>{data.name}</div>)
                    }
                    return(
                      <div>{data.name}</div>
                    )
                  });
                }}
                </Query>
              </ul>
          )}
        }
        </UserConsumer>
    )
  }
}

export default Tops;

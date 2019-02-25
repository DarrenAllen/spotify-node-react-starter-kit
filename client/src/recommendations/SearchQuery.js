import React, { Component } from 'react';
import { Query } from "react-apollo";
import searchArtistsQuery from "../queries/search";
import {UserConsumer} from '../context'

class SearchQuery extends Component {
  constructor(){
    super();
    this.state = {
      q: "",
      selected: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }
  handleChange(event){
    const value = event.target.value;

    this.setState({q: value});
    event.preventDefault();
  }
  selectItem(event){
    const val = event.target.value.split(",")
    
    const selected = this.state.selected;

    selected.push({
      name: val[0],
      id: val[1]
    });
    this.setState({
      selected: selected
    })
  }
  render() {
    return (
      <UserConsumer>
        {
        (context) => {
          return (
            <div className="{this.props.type}">
              <h3>{this.props.type}</h3>
              <input
                type="text"
                value={this.state.q}
                onChange={this.handleChange}
              />

              <Query query={searchArtistsQuery} variables={{q:this.state.q, user:context.user, type:this.props.type}} skip={!this.state.q}>
                {({ loading, error, data }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error :(</p>;
                  if(!data) return <p>No results</p>
                  if(this.state.selected.length >=5) return <p>No more selections remaining</p>
                  return data.items.map(ult => {
                    const combined = ult.name + "," + ult.id;
                    return(
                      <div><button onClick={this.selectItem} value={combined}>+</button> {ult.name}</div>
                    )
                  });
                }}
              </Query>
              <div className="selected">
                <p>Already selected</p>
                {this.state.selected.map(item=>item.name+" ")}
              </div>
            </div>
          )
        }
        }
      </UserConsumer>
    )
  }
}

export default SearchQuery;

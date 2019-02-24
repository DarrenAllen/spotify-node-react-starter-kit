import React, { Component } from 'react';
import Dashboard from "./dashboard/Dashboard.js"
import SignUp from "./SignUp.js"
import LogIn from "./LogIn.js"
import Home from "./Home.js"
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import './build/App.css';
import { Router } from "@reach/router"
import Recommendations from './recommendations/Recommendations.js';
import {UserProvider} from './context'

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({user: event.target.value});
    event.preventDefault();
  }
  render() {
    const self = this;

    return (
      <ApolloProvider client={client}>
        <label className="ultimate-username">User name!</label><input type="text" value={this.state.user} onChange={this.handleChange} />
        <UserProvider value={{user: this.state.user}}>
          <div className="App">
            <Router>
              <SignUp path="signup"/>
              <LogIn path="login"/>
              <Dashboard path="dashboard"/>
              <Home path="/" />
              <Recommendations path="recommendations" />
            </Router>
          </div>
        </UserProvider>
      </ApolloProvider>
    );
  }
}

export default App;

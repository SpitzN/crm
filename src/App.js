import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Clients from "./Components/Clients/Clients";
import Actions from "./Components/Actions/Actions";
import Analytics from "./Components/Analytics/Analytics";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Navbar} />
          <Route path="/clients" exact component={Clients} />
          <Route path="/actions" exact component={Actions} />
          <Route path="/analytics" exact component={Analytics} />
        </div>
      </Router>
    );
  }
}

export default App;

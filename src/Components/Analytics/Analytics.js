import React, { Component } from "react";
import { getDataFromDB } from "../../helpers";
import Badges from "./Badges/Badges";
import Charts from "./Charts/Charts";

class Analytics extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      loading: true
    };
  }

  componentDidMount = async () => {
    const clients = await getDataFromDB();
    this.setState({
      clients,
      loading: false
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? <div /> : <Badges clients={this.state.clients} />}
        <Charts />
      </div>
    );
  }
}

export default Analytics;

import React, { Component } from "react";
import { getDataFromDB } from "../../helpers";
import Loading from "../Layout/Loading";
import Badges from "./Badges/Badges";
import Charts from "./Charts/Charts";
import "../../css/analytics.css";

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
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="analytics-container">
            <Badges clients={this.state.clients} />
            <Charts clients={this.state.clients}/>
          </div>
        )}
      </div>
    );
  }
}

export default Analytics;

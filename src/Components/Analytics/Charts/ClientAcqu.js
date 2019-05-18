import React, { Component } from "react";
import { clientAcquisition } from "../../../helpers";
class ClientAcqu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  salesBreakdown = () => {
    clientAcquisition().then(rawData => {
      console.log(rawData);
    });
  };

  componentDidMount = () => {};

  render() {
    return <div className="chart client-acquisition-chart" />;
  }
}

export default ClientAcqu;

import React, { Component } from "react";
import TopEmployees from "./TopEmployees";
import CountrySales from "./CountrySales";
import SalesDate from "./SalesDate";
import ClientAcqu from "./ClientAcqu";
import "../../../css/charts.css";

class Charts extends Component {
  render() {
    return (
      <div className="charts-container">
        <TopEmployees data={this.props.clients} />
        <CountrySales data={this.props.clients} />
        <SalesDate />
        <ClientAcqu />
      </div>
    );
  }
}

export default Charts;

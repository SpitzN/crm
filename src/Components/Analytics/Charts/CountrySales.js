import React, { Component } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class CountrySales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  findAllCountries = () => {
    const countrySales = this.props.data
      .filter(d => d.sold)
      .map(d => d.country);
    const countryList = [...new Set(countrySales)];
    const countries = countryList.map(c => ({ country: c, count: 0 }));

    countrySales.forEach(country => {
      countries.find(c => (c.country === country ? c.count++ : null));
    });

    return countries;
  };

  componentDidMount = async () => {
    await this.setState({
      data: this.findAllCountries()
    });
  };

  render() {
    return (
      <div className="chart country-sales-chart">
        <BarChart
          width={700}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default CountrySales;

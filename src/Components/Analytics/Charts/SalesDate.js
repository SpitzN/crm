import React, { Component } from "react";
import { getLastThirty } from "../../../helpers";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class SalesDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  dateList = () => {
    getLastThirty().then(rawData => {
      let data = [];
      Object.keys(rawData).forEach(k =>
        data.push({ date: k, count: rawData[k] })
      );
      this.setState({
        data
      });
    });
  };

  componentDidMount() {
    this.dateList();
  }

  render() {
    return (
      <div className="chart sales-by-date-chart">
        <ResponsiveContainer width="100%">
          <LineChart
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
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default SalesDate;

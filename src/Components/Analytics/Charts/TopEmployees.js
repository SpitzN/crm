import React, { Component } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
class TopEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  findAllOwners = () => {
    const gatherOwners = this.props.data.filter(d => d.sold).map(d => d.owner);
    const ownerList = [
      ...new Set(this.props.data.filter(d => d.sold).map(d => d.owner))
    ];
    const owners = ownerList.map(o => ({ owner: o, count: 0 }));

    gatherOwners.forEach(name => {
      owners.find(o => {
        if (o.owner === name) {
          o.count++;
        }
      });
    });
    return owners;
  };

  findTop3 = () => {
    let topEmployees = this.findAllOwners()
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);
    return topEmployees;
  };

  componentDidMount = async () => {
    await this.setState({
      data: this.findTop3()
    });
  };

  buildChart = () => {
    return (
      <div className="chart top-employees-chart">
        <ComposedChart
          layout="vertical"
          width={500}
          height={350}
          data={this.state.data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="owner" type="category" />
          <Tooltip />
          {/* <Area dataKey="count" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="count" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </div>
    );
  };

  render() {
    return this.buildChart();
  }
}

export default TopEmployees;

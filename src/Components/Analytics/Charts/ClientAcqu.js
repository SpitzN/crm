import React, { Component } from "react";
import { clientAcquisition } from "../../../apiR";
import { PieChart, Pie, Sector, Cell } from "recharts";
import moment from "moment";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class ClientAcqu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  salesBreakdown = () => {
    clientAcquisition().then(rawData => {
      let data = [
        { name: "group A", value: 0 },
        { name: "Group B", value: 0 },
        { name: "Group C", value: 0 }
      ];

      const lastMonth = moment().subtract(1, "month");
      const sixMonthsAgo = moment().subtract(6, "months");
      const oneYearAgo = moment().subtract(12, "months");

      for (let d of rawData) {
        let mDate = moment(d.date, "L");

        if (mDate.isAfter(lastMonth)) {
          data[0].value += d.count;
        } else if (mDate.isBetween(oneYearAgo, sixMonthsAgo)) {
          data[1].value += d.count;
        } else if (mDate.isBefore(oneYearAgo)) {
          data[2].value += d.count;
        }
      }
      this.setState({
        data
      });
    });
  };

  componentDidMount = () => {
    this.salesBreakdown();
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="chart client-acquisition-chart">
        <PieChart width={400} height={400}>
          <Pie
            data={this.state.data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {this.state.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
}

export default ClientAcqu;

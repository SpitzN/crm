import React, { Component } from "react";
import { PieChart, Pie, Sector } from "recharts";
import moment from "moment";
import { clientAcquisition } from "../../../helpers";

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`New Clients ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class ClientPie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      data: []
    };
  }

  salesBreakdown = () => {
    clientAcquisition().then(rawData => {
      let data = [
        { name: "Last Month", value: 0 },
        { name: "6-12 Months", value: 0 },
        { name: "> 12 Months", value: 0 }
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

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  componentDidMount = () => {
    this.salesBreakdown();
  };
  render() {
    return (
      <div className="chart client-acquisition-chart">
        <PieChart width={500} height={500}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.state.data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </div>
    );
  }
}

export default ClientPie;

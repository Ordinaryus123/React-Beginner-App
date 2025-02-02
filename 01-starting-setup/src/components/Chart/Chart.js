import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
import ExpensesChart from "../Expenses/ExpensesChart";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxiumum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxiumum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;

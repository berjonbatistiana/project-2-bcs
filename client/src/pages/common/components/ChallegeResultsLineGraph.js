import React, { Component } from "react";
import Chart from "chart.js";

export class ChallengeResultsLineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["0", "10", "20", "30", "40", "50", "60"],
        datasets: [
          {
            label: "WPM",
            data: [75, 70, 80, 80, 90, 85],
          },
        ],
      },
      options: {},
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

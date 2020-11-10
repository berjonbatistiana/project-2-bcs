import React, { Component } from "react";
import Chart from "chart.js";

export class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const ids = [];
    const wpm = [];
    for (let i = 0; i < this.props.userData.length; i++) {
      ids.push(i + 1);
      wpm.push(this.props.userData[i].wordsPerMin);
    }
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [...ids].reverse(),
        datasets: [
          {
            label: "WPM",
            data: [...wpm].reverse(),
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

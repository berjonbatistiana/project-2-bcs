import React, { Component } from "react";
import Chart from "chart.js";

export class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const wpm = [];
    this.props.userData.forEach(item => {
      wpm.push(item.wordsPerMin);
    })
    new Chart(myChartRef, {
      type: "line",
      data: {
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

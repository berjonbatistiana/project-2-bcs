import React, { Component } from "react";
import Chart from "chart.js";

export class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const wpm = [];
    const labels = [];
    let ctr = 0;
    this.props.userData.forEach(item => {
      ctr++;
      wpm.push(item.wordsPerMin);
      labels.push(ctr.toString())
    })
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [...labels].reverse(),
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

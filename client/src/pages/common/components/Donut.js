import Chart from "chart.js";
import React, { Component } from "react";

export class Donut extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    let total = 0;
    this.props.userData.forEach((item) => {
      total += item.accuracy;
    });
    let percent = Math.floor(total / this.props.userData.length);
    const data = {
      labels: ["Green", "Red"],
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: ["#03a9f4", "#e91e63"],
          hoverBackgroundColor: ["#03a9f4", "#e91e63"],
        },
      ],
    };
    const doughnutCenterText = {
      beforeDraw: function (chart) {
        let width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        let fontSize = (height / 120).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        let text = percent?
          percent  + "%" : "Please do a challenge.",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    };
    new Chart(myChartRef, {
      type: "doughnut",
      data: data,
      options: {
        tooltips: {
          enabled: false,
        },
        hover: { mode: null },
        legend: {
          display: false,
        },
      },
      plugins: [doughnutCenterText],
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

import Chart from "chart.js";
import React, { Component } from "react";

export class Donut extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    let total = 0
    console.log(this.props);
    this.props.userData.forEach(item => {
      total += item.accuracy;
    })
    const percent = Math.floor(total / this.props.userData.length);
    const data = {
      labels: ["Green", "Red"],
      datasets: [
        {
          data: [percent, 100 - percent],
          backgroundColor: ["green", "red"],
          hoverBackgroundColor: ["green", "red"],
        },
      ],
    };
    const doughnutCenterText = {
      beforeDraw: function (chart) {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 120).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = percent + "%",
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

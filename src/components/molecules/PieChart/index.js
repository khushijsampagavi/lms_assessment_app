/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';
import './index.css'

const PieChart = ({ labels, series }) => {
  const [chartState, setChartState] = useState({
    series: series,
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      }],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart 
          options={chartState.options} 
          series={chartState.series} 
          type="pie" 
          width={380} 
        />
      </div>
     
    </div>
  );
};

export default PieChart;*/

import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = ({ labels = [], series = [] }) => {
  const options = {
    labels,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width={380} />
    </div>
  );
};

export default PieChart;

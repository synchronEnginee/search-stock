/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const ComparisonChart = () => {
  const data = {
    datasets: [
      {
        label: 'サムティ',
        data: [{ x: 9.32, y: 4.41 }],
        borderColor: 'rgba(255, 0, 0, 1)',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        pointRadius: 8,
      },
      {
        label: 'トーセイ',
        data: [{ x: 7.01, y: 3.97 }],
        borderColor: 'rgba(0, 255, 0, 1)',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        pointRadius: 8,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '配当利回り',
        },
      },
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'PER(予想)',
        },
      },
    },
  };

  return <Scatter width={730} height={250} data={data} options={options} />;
};

export default ComparisonChart;

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
        data: [9.32, 4.41],
        // borderColor: 'rgba(255, 0, 0, 1)',
        // backgroundColor: 'rgba(255, 0, 0, 0.5)',
        // pointRadius: 8,
      },
      {
        label: 'トーセイ',
        data: [7.01, 3.97],
        // borderColor: 'rgba(0, 255, 0, 1)',
        // backgroundColor: 'rgba(0, 255, 0, 0.5)',
        // pointRadius: 8,
      },
    ],
  };
  return <Scatter width={730} height={250} data={data} />;
};

export default ComparisonChart;

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

const randamColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

type ComparisonChartData = {
  name: string;
  per: number;
  dividendYield: number;
}[];

export type ComparisonChartProps = {
  stockDatas: ComparisonChartData;
};

// グラフ用の複数データ生成
const dataForChart = (stockDatas: ComparisonChartData) =>
  stockDatas.map((stockData) => {
    const color = randamColor();
    return {
      label: stockData.name,
      data: [{ x: stockData.per, y: stockData.dividendYield }],
      borderColor: color,
      backgroundColor: color,
      pointRadius: 16,
    };
  });

const ComparisonChart = ({ stockDatas }: ComparisonChartProps) => {
  const data = {
    datasets: dataForChart(stockDatas),
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

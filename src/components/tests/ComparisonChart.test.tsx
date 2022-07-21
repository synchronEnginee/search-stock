/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ComparisonChart, { dataForChart, randomColor } from '../ComparisonChart';

test('dataForChart test', () => {
  expect(
    dataForChart([{ name: 'test', per: 1111, dividendYield: 1.22 }]),
  ).toEqual([
    {
      label: 'test',
      data: [{ x: 1111, y: 1.22 }],
      borderColor: expect.anything(),
      backgroundColor: expect.anything(),
      pointRadius: 16,
    },
  ]);
});

test('randomColor test', () => {
  expect(randomColor()).toMatch(/^rgb\([0-9]+,[0-9]+,[0-9]+\)$/);
});

import ComparisonChart, { randomColor } from '../../components/ComparisonChart';

test('randomColor test', () => {
  expect(randomColor()).toMatch(/^rgb\([0-9]+,[0-9]+,[0-9]+\)$/);
});

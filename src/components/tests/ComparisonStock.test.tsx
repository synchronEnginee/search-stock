import React from 'react';
import renderer from 'react-test-renderer';
import ComparisonStock from '../ComparisonStock';

// ここにテストを書いていく
// スナップショットテスト
test('スナップショットテスト', () => {
  const props = {
    code: 9999,
  };
  const tree = renderer.create(<ComparisonStock code={props.code} />);
  expect(tree).toMatchSnapshot();
});

/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

// pageコンポーネントを作成する

const StockList = () => {
  const styles = css({
    width: '60vw',
    height: '100%',
    margin: '0 auto',
    fontSize: '30px',
    border: '1px solid black',

    'tr th': {
      fontWeight: 'bold',
      background: '#fff5e5',
      border: '1px double black',
    },
    'tr td': {
      border: 'inherit',
    },
  });
  return (
    <>
      <Link to="/compare">銘柄比較へ</Link>
      <table css={styles}>
        <tr>
          <th>銘柄名</th>
          <th>銘柄コード</th>
          <th>株価</th>
          <th>PER</th>
        </tr>
        <tr>
          <td>任天堂</td>
          <td>7974</td>
          <td>57250</td>
          <td>19.75</td>
        </tr>
        <tr>
          <td>キーエンス</td>
          <td>6861</td>
          <td>51020</td>
          <td>----</td>
        </tr>
      </table>
    </>
  );
};

export default StockList;

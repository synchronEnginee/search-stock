/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import FallStock, { FallStockProps } from 'components/FallStock';

const fallStocks: { stocks: Array<FallStockProps> } = {
  stocks: [
    {
      name: '任天堂',
      code: '7974',
      price: '58000',
      stockFall: '20%',
      stockTargetPrice: '80000',
    },
    {
      name: 'キーエンス',
      code: '6861',
      price: '49000',
      stockFall: '30%',
      stockTargetPrice: '60000',
    },
  ],
};

const FallListPage = () => {
  //   const [stocks, setStocks] = useState<FallStockProps[]>([]);
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
  });
  return (
    <>
      <Link to="/compare">銘柄比較へ</Link>
      <table css={styles}>
        <tr>
          <th>銘柄名</th>
          <th>銘柄コード</th>
          <th>株価</th>
          <th>下落率</th>
          <th>目標株価</th>
        </tr>
        {fallStocks.stocks.map((stock) => (
          <FallStock
            name={stock.name}
            code={stock.code}
            price={stock.price}
            stockFall={stock.stockFall}
            stockTargetPrice={stock.stockTargetPrice}
          />
        ))}
      </table>
    </>
  );
};

export default FallListPage;

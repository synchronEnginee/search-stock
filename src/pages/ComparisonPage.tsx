/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  ComparisonStock,
  ComparisonStockProps,
} from '../components/ComparisonStock';

// useStateで管理へ変更
// バックエンドAPI叩いて取得
// const comparisonStocks: { stocks: Array<ComparisonStockProps> } = {
//   stocks: [
//     { name: '任天堂', code: '7974', price: '58000', per: '20' },
//     { name: 'キーエンス', code: '6861', price: '49000', per: '30' },
//   ],
// };

const styles = css({
  width: '60%',
  height: '100%',
  margin: '0 auto',
  fontSize: '30px',
  border: '1px solid black',
  'tr:nth-child(odd)': {
    'background-color': 'rgb(255, 255, 128)',
  },
  'tr th': {
    fontWeight: 'bold',
    background: '#fff5e5',
    border: '1px double black',
  },
});

const stockUrl = 'http://127.0.0.1:5000/stock';

// 項目に欠けがあった場合でもエラーが出るよう外部で定義
interface StockGetResponse extends AxiosResponse {
  data: ComparisonStockProps[];
}

interface IErrorResponse {
  error: string;
}

// サーバからの応答の形式を渡す
// TODO: useSWRへ変更し、ページネーション実装
const ComparisonPage = () => {
  const [stocks, setStocks] = useState<ComparisonStockProps[]>([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      try {
        const res = await axios.get<ComparisonStockProps, StockGetResponse>(
          stockUrl,
        );
        if (res.status !== 200 || !('data' in res)) {
          throw new AxiosError('statusが200じゃない');
        }
        console.log(res.data);
        setStocks(res.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.status);
          console.log(error.message);
        }
      }
    })();
  }, []);
  return (
    <div>
      銘柄比較
      <div>
        <Link to="/">トップへ</Link>
      </div>
      <table css={styles}>
        <tr>
          <th>銘柄名</th>
          <th>銘柄コード</th>
          <th>株価</th>
          <th>PER</th>
        </tr>
        {stocks.map((stock) => (
          <ComparisonStock
            name={stock.name}
            code={stock.code}
            price={stock.price}
            per={stock.per}
          />
        ))}
      </table>
    </div>
  );
};

export default ComparisonPage;

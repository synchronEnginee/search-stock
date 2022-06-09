/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  ComparisonStock,
  ComparisonStockProps,
} from 'components/ComparisonStock';
import ComparisonChart from 'components/ComparisonChart';

// チャートに渡す株データ(後でバックエンドから取得に書き換え)
const stockDataForChart = [
  {
    name: 'サムティ',
    per: 7.3,
    dividendYield: 4.5,
  },
  {
    name: 'オリックス',
    per: 10.5,
    dividendYield: 3.8,
  },
  {
    name: '任天堂',
    per: 17.5,
    dividendYield: 0.3,
  },
];

// TODO:比較チャートを表示するページへ変更
// 機能的にrechart.js予定
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
  const [isList, setIsList] = useState(false);
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
      {isList ? (
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
      ) : (
        <ComparisonChart stockDatas={stockDataForChart} />
      )}
    </div>
  );
};

export default ComparisonPage;

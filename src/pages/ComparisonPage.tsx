/** @jsxImportSource @emotion/react */
import React, { useState, createContext, useReducer } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
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
    pbr: 10.0,
    dividendYield: 4.5,
    dividendPayoutRatio: 30.0,
  },
  {
    name: 'オリックス',
    per: 10.5,
    pbr: 10.0,
    dividendYield: 3.8,
    dividendPayoutRatio: 30.0,
  },
  {
    name: '任天堂',
    per: 17.5,
    pbr: 10.0,
    dividendYield: 0.3,
    dividendPayoutRatio: 30.0,
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

// compareStockInfo
const StockContext = createContext({});

// ComparisonPageでuseContextとuseReducer、ComparisonStockへdispatch渡してuseEffect内でper取得→dispatch
// ComparisonPageでコードのみの配列をstate管理、perなどの情報をコードのstateをキーとしたオブジェクト配列でreducer経由でコピーで保持
const ComparisonPage: React.FC = () => {
  const [isList, setIsList] = useState(true);
  // 銘柄コードリスト
  const [codeList, setCodeList] = useState<Set<number>>(
    new Set([8316, 8306, 8473]),
  );
  const [stocks, setStocks] = useState<ComparisonStockProps[]>([]);
  return (
    <>
      銘柄比較
      <div>
        <Link to="/">トップへ</Link>
      </div>
      {isList ? (
        codeList.forEach((code) => <ComparisonStock code={code} />)
      ) : (
        <ComparisonChart stockDatas={stockDataForChart} />
      )}
    </>
  );
};

export default ComparisonPage;

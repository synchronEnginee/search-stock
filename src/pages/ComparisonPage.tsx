/** @jsxImportSource @emotion/react */
import React, { useState, createContext, useReducer, useRef } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import ComparisonStock, {
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
const ComparisonPage = () => {
  const [isList, setIsList] = useState(true);
  // 銘柄コードリスト
  const [codeList, setCodeList] = useState<Set<number>>(
    new Set([8316, 8306, 8473]),
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const addCodeList = () => {
    if (!inputRef?.current) return;
    setCodeList((prevCodeList) => {
      console.log(inputRef.current);
      return new Set([
        ...Array.from(prevCodeList),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        parseInt(inputRef.current!.value, 10),
      ]);
    });
  };
  const handleSubmit = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    addCodeList();
  };
  const [stocks, setStocks] = useState<ComparisonStockProps[]>([]);
  return (
    <>
      <Link to="/">トップへ</Link>
      {isList ? (
        <table css={styles}>
          <tr>
            <th>銘柄コード</th>
            <th>銘柄名</th>
            <th>PER</th>
            <th>PBR</th>
            <th>利回り</th>
            <th>配当性向</th>
          </tr>
          {Array.from(codeList).map((code) => {
            console.log(code);
            return <ComparisonStock code={code} />;
          })}
        </table>
      ) : (
        !isList && <ComparisonChart stockDatas={stockDataForChart} />
      )}
      <div>
        <input ref={inputRef} type="number" />
        <button
          type="button"
          onClick={() => {
            console.log(inputRef.current!.value);
            addCodeList();
          }}
        >
          株追加
        </button>
      </div>
      <button type="button" onClick={() => setIsList(!isList)}>
        表示切替
      </button>
    </>
  );
};

export default ComparisonPage;

/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useContext, useRef } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { css } from '@emotion/react';
import {
  StocksInfoContext,
  StocksInfoForChartStore,
} from 'pages/ComparisonPage';

const stockUrl = 'http://127.0.0.1:5000/compare/';

// 項目に欠けがあった場合でもエラーが出るよう外部で定義
interface StockGetResponse extends AxiosResponse {
  data: ComparisonStockInfo;
}

// TODO: numberを4桁のリテラル型にする
export type ComparisonStockInfo = {
  name: string;
  per: number;
  pbr: number;
  dividendYield: number;
  dividendPayoutRatio: number;
};

export type ComparisonStockProps = {
  code: number;
};

// 株の数が増えるとレンダリングコストが増えるのでメモ化
// 2回レンダリングされてそう
/**
 * 株比較のための1行データ
 * @param props
 * @returns
 */
const ComparisonStock: React.FC<ComparisonStockProps> = React.memo(
  (props: ComparisonStockProps) => {
    const { code } = props;
    const [stockInfo, setStockInfo] = useState<ComparisonStockInfo>({
      name: '---',
      per: 0,
      pbr: 0,
      dividendYield: 0,
      dividendPayoutRatio: 0,
    });
    // チャート比較用に詳細情報を保管
    const stocksInfoStore =
      useContext<StocksInfoForChartStore>(StocksInfoContext);
    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (async () => {
        try {
          const res = await axios.get<ComparisonStockProps, StockGetResponse>(
            stockUrl + code.toString(),
          );
          if (res.status !== 200 || !('data' in res)) {
            throw new AxiosError('statusが200じゃない');
          }
          console.log('ComparisonStockのuseEffect');
          console.log(res.data);
          setStockInfo(res.data);
          stocksInfoStore[code] = res.data;
        } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error.status);
            console.log(error.message);
          }
        }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const styles = css({
      p: {
        fontSize: 26,
      },
    });
    return (
      <tr css={styles}>
        <td>{code}</td>
        <td>{stockInfo.name}</td>
        <td>{stockInfo.per}</td>
        <td>{stockInfo.pbr}</td>
        <td>{stockInfo.dividendYield}</td>
        <td>{stockInfo.dividendPayoutRatio}</td>
      </tr>
    );
  },
);

export default ComparisonStock;

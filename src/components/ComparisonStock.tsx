/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useContext } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { css } from '@emotion/react';

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

// パフォーマンス問題が出た場合はMemoを活用
export const ComparisonStock: React.FC<ComparisonStockProps> = (props) => {
  const { code } = props;
  const [stockInfo, setStockInfo] = useState<ComparisonStockInfo>({
    name: '---',
    per: 0,
    pbr: 0,
    dividendYield: 0,
    dividendPayoutRatio: 0,
  });
  console.log(code);
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
        console.log(res.data);
        setStockInfo(res.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.status);
          console.log(error.message);
        }
      }
    })();
  }, [code]);
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
};

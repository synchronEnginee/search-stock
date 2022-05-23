/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosPromise,
  AxiosError,
} from "axios";
import {
  ComparisonStock,
  ComparisonStockProps,
} from "../components/ComparisonStock";

// useStateで管理へ変更
// バックエンドAPI叩いて取得
const comparisonStocks: { stocks: Array<ComparisonStockProps> } = {
  stocks: [
    { name: "任天堂", code: "7974" },
    { name: "キーエンス", code: "6861" },
  ],
};

const styles = css({
  width: "60vw",
  height: "100%",
  margin: "0 auto",
  "font-size": "30px",
  border: "1px solid black",
  "tr:nth-child(odd)": {
    "background-color": "rgb(255, 255, 128)",
  },
  "tr th": {
    "font-weight": "bold",
    background: "#fff5e5",
    border: "1px double black",
  },
});

const stockUrl = "https://127.0.0.1:5000/stock";

// 項目に欠けがあった場合でもエラーが出るよう外部で定義
interface StockGetResponse {
  name: string;
  code: string;
  price: string;
  per: string;
}

interface IErrorResponse {
  error: string;
}

// any入っちゃったので要改善
type FetchStock = () => AxiosPromise<StockGetResponse> | Promise<Error>;

// サーバからの応答の形式を渡す
// TODO: useEffect内、ファイルを切り出す
const getStock = () => {
  const getStockCompare: FetchStock = async () => {
    await axios
      .get("https://127.0.0.1:5000/stock")
      .then((res: AxiosResponse<StockGetResponse>) => {
        // res.data.tokenはstring
        console.log(`token: ${res.data.code}`);
        return res;
      })
      // エラー応答の構造を明示する
      .catch((e: AxiosError<IErrorResponse>) => {
        if (e.response !== undefined) {
          // e.response.data.errorはstring
          console.log(e.response.data.error);
          return new Error(e.response.data.error);
        }
      });
  };
  return getStockCompare;
};

const ComparisonPage = () => {
  useEffect(() => {});
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
        </tr>
        {comparisonStocks.stocks.map((stock) => (
          <ComparisonStock name={stock.name} code={stock.code} />
        ))}
      </table>
    </div>
  );
};

export default ComparisonPage;

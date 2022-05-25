/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  ComparisonStock,
  ComparisonStockProps,
} from "../components/ComparisonStock";

// useStateで管理へ変更
// バックエンドAPI叩いて取得
const comparisonStocks: { stocks: Array<ComparisonStockProps> } = {
  stocks: [
    { name: "任天堂", code: "7974", price: "58000", per: "20" },
    { name: "キーエンス", code: "6861", price: "49000", per: "30" },
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
  status: number;
  data: Array<ComparisonStockProps>;
}

interface IErrorResponse {
  error: string;
}

// サーバからの応答の形式を渡す
// TODO: useEffect内、ファイルを切り出す
const ComparisonPage = () => {
  const [stocks, setStocks] = useState<Array<ComparisonStockProps>>();
  useEffect(() => {
    const getStock = async () => {
      try {
        const res = await axios.get<StockGetResponse>(stockUrl);
        if (res.status !== 200 || !("data" in res)) {
          throw new AxiosError("statusが200じゃない");
        }
        setStocks(res.data.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
      }
    };
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
        </tr>
        {comparisonStocks.stocks.map((stock) => (
          <ComparisonStock name={stock.name} code={stock.code} />
        ))}
      </table>
    </div>
  );
};

export default ComparisonPage;

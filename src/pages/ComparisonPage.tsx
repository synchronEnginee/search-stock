/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import ComparisonStock from "../components/ComparisonStock";

// useStateで管理へ変更
const comparisonStocks = {
  stocks: [
    { name: "任天堂", code: "7974" },
    { name: "キーエンス", code: "6861" },
  ],
};

const ComparisonPage = () => {
  const styles = css({
    width: "60vw",
    height: "100%",
    margin: "0 auto",
    "font-size": "30px",
    border: "1px solid black",
    "tr th": {
      "font-weight": "bold",
      background: "#fff5e5",
      border: "1px double black",
    },
  });
  return (
    <div>
      銘柄比較
      <div>
        <Link to="/">トップへ</Link>
      </div>
      <table css={styles}>
        {comparisonStocks.stocks.map((stock) => (
          <ComparisonStock name={stock.name} code={stock.code} />
        ))}
      </table>
    </div>
  );
};

export default ComparisonPage;

/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export interface ComparisonStockProps {
  name: string;
  code: string;
  price: string;
  per: string;
}

export const ComparisonStock: React.FC<ComparisonStockProps> = (props) => {
  const { name, code, price, per } = props;
  const styles = css({
    td: {
      border: "inherit",
    },
  });
  return (
    <tr css={styles}>
      <td>{name}</td>
      <td>{code}</td>
    </tr>
  );
};

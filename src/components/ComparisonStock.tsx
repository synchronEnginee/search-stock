/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

interface ComparisonStockProps {
  name: string;
  code: string;
}

const ComparisonStock: React.FC<ComparisonStockProps> = (props) => {
  const { name, code } = props;
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

export default ComparisonStock;

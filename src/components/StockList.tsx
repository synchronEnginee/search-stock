/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const StockList = () => {
  const styles = css({
    "font-size": "30px",

    "&:hover": {
      color: "red",
    },
  });
  return <div css={styles}>StockList</div>;
};

export default StockList;

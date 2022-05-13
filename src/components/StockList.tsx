/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const styles = css({
  fontsize: "12px",

  "&:hover": {
    color: "red",
  },
});

const StockList = () => <div css={styles}>StockList</div>;

export default StockList;

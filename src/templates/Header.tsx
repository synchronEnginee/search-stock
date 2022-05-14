/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const Header = () => {
  const styles = css({
    "font-size": "30px",
    width: "100vw",
    height: "30vh",

    "&:hover": {
      color: "red",
    },
  });
  return <div css={styles}>Header</div>;
};

export default Header;

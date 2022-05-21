/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import header_picture from "assets/header_picture.jpg";

const Header = () => {
  const styles = css({
    "font-size": "30px",
    width: "100vw",
    height: "30vh",
    "background-image": `url(${header_picture})`,

    "&:hover": {
      color: "red",
    },
  });
  return <div css={styles}>Header</div>;
};

export default Header;

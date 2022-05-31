/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import header_picture from 'assets/header_picture.jpg';

const Header = () => {
  const styles = css({
    fontSize: '30px',
    textAlign: 'center',
    width: '80vw',
    height: '30vh',
    backgroundImage: `url(${header_picture})`,

    '&:hover': {
      color: 'red',
    },
  });
  return <div css={styles}>Header</div>;
};

export default Header;

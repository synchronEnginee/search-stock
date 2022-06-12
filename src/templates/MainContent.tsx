/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

// marginLeftのwidthの数値は後で外だし
interface MainContentProps {
  // JSX.Element[]がないと複数のコンポーネントが並列にあるとレンダリングされなくなる
  children: JSX.Element | JSX.Element[];
}

const Header: React.FC<MainContentProps> = ({ children }) => {
  const styles = css({
    marginLeft: '20vw',
  });
  return <div css={styles}>{children}</div>;
};

export default Header;

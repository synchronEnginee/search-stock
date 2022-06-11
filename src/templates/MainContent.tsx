/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

// marginLeftのwidthの数値は後で外だし
interface MainContentProps {
  children: React.ReactNode | EmotionJSX.Element;
}

const Header: React.FC<MainContentProps> = ({ children }) => {
  const styles = css({
    marginLeft: '20vw',
  });
  return <div css={styles}>{children}</div>;
};

export default Header;

/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Footer = () => {
  const styles = css({
    dl: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      dt: {
        width: '10%',
        borderBottom: '2px solid #0277b4',
      },
      dd: {
        width: '20%',
        borderBottom: '1px solid #6f6f6f',
      },
    },
  });
  return (
    <div css={styles}>
      <dl>
        <dt>作成日</dt>
        <dd>2022年5月14日</dd>
      </dl>
      <dl>
        <dt>作成者</dt>
        <dd>シンクロンのエンジニア</dd>
      </dl>
    </div>
  );
};

export default Footer;

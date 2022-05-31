/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export interface FallStockProps {
  name: string;
  code: string;
  price: string;
  stockFall: string;
  stockTargetPrice: string;
}

const FallStock: React.FC<FallStockProps> = (props) => {
  const { name, code, price, stockFall, stockTargetPrice } = props;
  const styles = css({
    td: {
      border: 'inherit',
    },
  });
  return (
    <tr css={styles}>
      <td>{name}</td>
      <td>{code}</td>
      <td>{price}</td>
      <td>{stockFall}</td>
      <td>{stockTargetPrice}</td>
    </tr>
  );
};

export default FallStock;

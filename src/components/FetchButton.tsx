/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Suspense, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { useStockQuery } from 'hooks/useStockQuery';
import { ComparisonStockInfo } from './ComparisonStock';
import suspenseResource from '../provider/suspenseResource';

type SuspenseDisplayProps = {
  code: number;
};

const SuspenseDisplay = ({ code }: SuspenseDisplayProps) => {
  const { data } = useStockQuery(code);
  return <div>{data?.name}</div>;
};

/**
 * suspenseを試す
 * @param
 * @returns
 */
const FetchButton = () => {
  const code = useRef(3246);
  const [codeState, setCodeState] = useState(3246);

  return (
    <>
      <input
        type="number"
        onChange={(e) => {
          code.current = Number(e.target.value);
        }}
      />
      <button onClick={() => setCodeState(code.current)} type="button">
        FetchButton
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseDisplay code={codeState} />
      </Suspense>
    </>
  );
};

export default FetchButton;

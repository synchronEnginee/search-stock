/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Suspense, useState } from 'react';
import axios from 'axios';
import suspenseResource from '../provider/suspenseResource';

const stockUrl = 'http://127.0.0.1:5000/compare/';

type Props = {
  fetcher: () => Promise<any>;
};

const Fetch = (props: Props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const d = suspenseResource(props.fetcher()).read();
  return (
    <div>
      <div>data:{d}</div>
    </div>
  );
};

/**
 * suspenseを試す
 * @param
 * @returns
 */
const FetchButton = () => {
  const fetcher1 = async () => {
    setTimeout(() => {}, 5000);
    return axios.get(stockUrl);
  };
  const fetcher2 = async () => {
    setTimeout(() => {}, 5000);
    return axios.get(stockUrl);
  };
  const [fetch, setFetch] = useState(() => fetcher1);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const changeData = () => setFetch(() => fetcher2);
  return (
    <>
      <button onClick={() => changeData()} type="button">
        FetchButton
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Fetch fetcher={fetch} />
      </Suspense>
    </>
  );
};

export default FetchButton;

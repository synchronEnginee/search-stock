import { useCallback, useRef } from 'react';

// ComparisonStockInfoの部分をT、key:stringのみ定義？
// export type StocksInfoForChartStore = {
//     [key: string]: ComparisonStockInfo;
//   };

function useStockInfoStore<T extends object>() {
  const stockInfoStore = useRef<T>();
  const addStockInfoStore = useCallback((code: string, stockInfo: T) => {
    stockInfoStore?.current?[code] = stockInfo;
  }, []);
  return { stockInfoStore, addStockInfoStore };
}

export default useStockInfoStore;

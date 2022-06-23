import { useCallback, useRef } from 'react';

// TODO:stockInfoStoreとStockInfoStoreを操作する関数を受け取るcontext.provider2層を作成する{children}を受け取る

// ComparisonStockInfoの部分をT、key:stringのみ定義？
export type StockInfoStore<T extends object> = {
  [key: string]: T;
};

/**
 * 再レンダリングさせない値管理.
 * 株の詳細ステータスをTで渡し、keyは証券コード.
 *
 * @returns
 * stockInfoStore: StocksInfoStore<T extends object>,
 * addStockInfoStore: (code: string, stockInfo: T) => void
 */
const useStockInfoStore = <T extends object>() => {
  const stockInfoStore = useRef<StockInfoStore<T>>({}).current;
  const addStockInfoStore = useCallback(
    (code: string, stockInfo: T) => {
      if (stockInfoStore?.current) {
        stockInfoStore[code] = stockInfo;
      }
    },
    [stockInfoStore],
  );
  return [stockInfoStore, { addStockInfoStore }] as const;
};

export default useStockInfoStore;

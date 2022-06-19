import { useCallback, useRef } from 'react';

// ComparisonStockInfoの部分をT、key:stringのみ定義？
export type StocksInfoStore<T extends object> = {
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
function useStockInfoStore<T extends object>() {
  const stockInfoStore = useRef<StocksInfoStore<T>>().current;
  const addStockInfoStore = useCallback((code: string, stockInfo: T) => {
    if (stockInfoStore?.current) {
      stockInfoStore[code] = stockInfo;
    }
    // useRefのため依存へ渡さない
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { stockInfoStore, addStockInfoStore };
}

export default useStockInfoStore;

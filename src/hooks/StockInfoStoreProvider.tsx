import React, { createContext, ReactNode } from 'react';
import { StockInfoStore, OperateStockInfoStore } from 'fooks/useStockInfoStore';

// storeのプロバイダー
export const StockInfoContext = createContext({});

// storeを操作するプロバイダー
export const OperateStockInfoContext = createContext({});
// Propsの型定義
type StockInfoStoreProviderProps<T extends object> = {
  children: ReactNode;
  store: StockInfoStore<T>;
  operateStore: OperateStockInfoStore<T>;
};

const StockInfoStoreProvider = <T extends object>(
  props: StockInfoStoreProviderProps<T>,
) => {
  const { children, store, operateStore } = props;
  return (
    <StockInfoContext.Provider value={store}>
      <OperateStockInfoContext.Provider value={operateStore}>
        {children}
      </OperateStockInfoContext.Provider>
    </StockInfoContext.Provider>
  );
};

export default StockInfoStoreProvider;
import React, { createContext, ReactNode } from 'react';
import { StockInfoStore } from 'fooks/useStockInfoStore';

const StockInfoContext = createContext({});

const OperateStockInfoContext = createContext({});
// Propsの型定義を行う
type StockInfoStoreProviderProps<T extends object> = {
  children: ReactNode;
  store: StockInfoStore<T>;
  operateStore: T;
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

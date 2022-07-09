import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorContents from './ErrorContents';

type AppErrorBoundaryProps = {
  children: React.ReactNode;
};

const onError = (error: Error, info: { componentStack: string }) => {
  // ここでログ出力などを行う
  console.log('error.message', error.message);
  console.log('info.componentStack:', info.componentStack);
};

const AppErrorBoundary = ({ children }: AppErrorBoundaryProps) => (
  <ErrorBoundary FallbackComponent={ErrorContents} onError={onError}>
    {children}
  </ErrorBoundary>
);

export default AppErrorBoundary;

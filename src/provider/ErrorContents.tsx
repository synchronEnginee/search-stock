import React from 'react';
import { FallbackProps } from 'react-error-boundary';

const ErrorContents = ({ error }: FallbackProps) => (
  <div>
    <h2>エラーが発生しました。</h2>
    <pre>{error.message}</pre>
  </div>
);
export default ErrorContents;

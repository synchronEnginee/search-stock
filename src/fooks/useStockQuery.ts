import { useQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

// typeがComparisonStockと重複しているので切り出す
// 項目に欠けがあった場合でもエラーが出るよう外部で定義
interface StockGetResponse extends AxiosResponse {
  data: ComparisonStockInfo;
}

// TODO: numberを4桁のリテラル型にする
// typesファイルに切り出す
type ComparisonStockInfo = {
  name: string;
  per: number;
  pbr: number;
  dividendYield: number;
  dividendPayoutRatio: number;
};

type ComparisonStockProps = {
  code: number;
};

// eslint-disable-next-line import/prefer-default-export
export const useStockQuery = (code: number) =>
  useQuery(
    ['stocks', code],
    async () => {
      const { data } = await axios.get<ComparisonStockProps, StockGetResponse>(
        `http://127.0.0.1:5000/compare/${code}`,
      );
      return data;
    },
    { staleTime: 30000 },
  );

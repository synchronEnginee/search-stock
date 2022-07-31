/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// 銘柄コードとなってほしいPER←推奨株価を出す
type Inputs = {
  stockCode: string;
  wantPer: number;
};

/**
 * react-hook-formのお試し
 */
const StockForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  // 本来はバックエンドへ送る
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log('onSubmit:', data);
  // useFormへ渡したデータの型のプロパティ名でwatchできる
  console.log('watch:', watch('stockCode'));
  // useFormHookはスプレッド構文で{ onChange, onBlur, name, ref }をinputタグへ渡す
  return (
    /* handleSubmitはフォームの入力を確かめたうえで、引数に渡した関数(onSubmit)を呼び出す */
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register関数の呼び出しにより、フォーム入力の要素を引数の名前で登録する */}
      <input defaultValue="test" {...register('stockCode')} />
      {/* register関数の第2引数には、HTML標準フォームデータ検証のルールが渡せる */}
      <input {...register('wantPer', { required: true })} />
      {/* データ検証に失敗するとerrorsが返され、登録した名前で取り出せる */}
      {errors.wantPer && (
        <span style={{ color: 'red' }}>This field is required</span>
      )}
      <input type="submit" />
    </form>
  );
};

export default StockForm;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * Suspenseを利用するためのresource.
 * 勉強用で利用.
 * react-query利用するので不要となった.
 * @param promise
 * @returns
 */
const suspenseResource = (promise: Promise<any>) => {
  let status = 'pending';
  let result: any;

  const suspender = promise.then(
    (r) => {
      status = 'fulfilled';
      result = r;
    },
    (e) => {
      status = 'rejected';
      result = e;
    },
  );

  const read = () => {
    if (status === 'pending') {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw suspender;
    } else if (status === 'rejected') {
      throw result;
    } else {
      return result;
    }
  };

  return { read };
};

export default suspenseResource;

/**
 * @author
 * @file App.tsx
 * @fileBase App
 * @path projects\react19-template\src\App.tsx
 * @from
 * @desc
 * @example
 */

import { createAlova } from 'alova';
import { useRequest } from 'alova/client';
import ReactHook from 'alova/react';
import adapterFetch from 'alova/fetch';

const alova = createAlova({
  baseURL: 'http://192.168.111.172:9000',
  statesHook: ReactHook,
  requestAdapter: adapterFetch(),
  responded: (response) => {
    return response.json();
  },
});
export const App: React.FC /* <AppProps> */ = () => {
  const { data, loading, error, send } = useRequest(
    () => alova.Post('/login', { username: 'admin', password: '111111' }),
    {
      immediate: false,
      force: true,
    },
  );
  return (
    <div>
      <button onClick={() => send(true)}>123123123123</button>
      {loading ?? 'loading'}
      {error ? error?.message : ''}
      <textarea>{JSON.stringify(data, null, 2)}</textarea>
    </div>
  );
};

// 默认导出
export default App;

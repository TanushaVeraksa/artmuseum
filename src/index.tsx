import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {setupStore} from './store/store';
import { Provider } from 'react-redux';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lexend Deca;
}
`

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
  <Global/>
  <React.StrictMode>
  <Provider store =  {store}>
  <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>
  </>
);

reportWebVitals();

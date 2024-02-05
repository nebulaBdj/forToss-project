
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from "react-query";
import Router from './Router';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={Router}/>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);



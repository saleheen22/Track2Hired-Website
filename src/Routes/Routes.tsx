/* eslint-disable @typescript-eslint/no-unused-vars */

import { createBrowserRouter, RouterProvider } from 'react-router';

import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import Page from '../pages/Page';
import HomeLayout from '../Layouts/HomeLayout';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        path: '/',
        Component: Page,
      },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
]);

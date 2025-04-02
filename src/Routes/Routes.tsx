/* eslint-disable @typescript-eslint/no-unused-vars */


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
  
  import React, { Children } from "react";
  import ReactDOM from "react-dom/client";
import App from "../App";
import Page from "../pages/Page";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
      children : [
        {
            path: "/check",
            Component: Page
        }
      ]
    },
    
  ]);
  

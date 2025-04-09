/* eslint-disable @typescript-eslint/no-unused-vars */

import { createBrowserRouter} from 'react-router';


import Page from '../pages/Page';
import HomeLayout from '../Layouts/HomeLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../Layouts/Dashboard';
import Jobs from '../pages/Jobs';
import Job from '../pages/Jobs/Job';
import JobTable from '../pages/Jobs/JobApplication';

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
  {path: '/register',
    Component: Register
  },
  {
    path: '/seejobs',
    Component: JobTable,
  },
  {path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [{
      path: '',
      Component: Jobs
    },{
      path: 'job',
      Component: Job
    }
  ]
  }
]);

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
import TrackedJobs from '../pages/Jobs/TrackedJobs';
import Resume from '../pages/Resume';
import CoverLetters from '../pages/CoverLetters/CoverLetters'
import SingleCoverLetter from '../pages/CoverLetters/SingleCoverLetter';
import SingleCompany from '../pages/CompanyResearch/SingleCompany'
import Companies from '../pages/CompanyResearch/Companies'
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
      path: 'jobs',
      Component: TrackedJobs
    },{
      path: 'resume',
      Component: Resume
    },
    {path: 'cover-letters',
      Component: CoverLetters
    },
    {
      path: 'cover-letter/:jobID',
      Component: SingleCoverLetter
    },
    {
      path: 'company-research',
      Component: Companies
    },
    {
      path: 'company-research/:jobID',
      Component: SingleCompany
    }

  ]
  }
]);

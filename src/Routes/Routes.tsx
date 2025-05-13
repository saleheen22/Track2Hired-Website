/* eslint-disable @typescript-eslint/no-unused-vars */

import { createBrowserRouter } from 'react-router';

import Page from '../pages/Page';
import HomeLayout from '../Layouts/HomeLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

import Dashboard from '../Layouts/Dashboard';

import TrackedJobs from '../pages/Jobs/TrackedJobs';
import Resume from '../pages/Resume';
import CoverLetters from '../pages/CoverLetters/CoverLetters';
import SingleCoverLetter from '../pages/CoverLetters/SingleCoverLetter';
import SingleCompany from '../pages/CompanyResearch/SingleCompany';
import Companies from '../pages/CompanyResearch/Companies';
import MockIntJobs from '../pages/MockInterview/MockIntJobs';
import SingleMockInterview from '../pages/MockInterview/SingleMockInterview';
import JobDashboard from '../pages/Jobs/JobDashboard';
import ColdEmailsJob from '../pages/ColdEmail/ColdEmailsJob';
import SingleColdEmail from '../pages/ColdEmail/SingleColdEmail';
import AboutUs from '../pages/AboutUs';
import Privacy from '../pages/Privacy';
import AddJob from '../pages/AddJob';
export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    // children: [
    //   {
    //     path: '/',
    //     Component: Page,
    //   },
    // ],
  },
  {
    path: '/about',
    Component: AboutUs,
  },
  {
    path: '/privacy',
    Component: Privacy,
  },
  {
    path: '/login',
    Component: Login,
  },
  { path: '/register', Component: Register },

  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        Component: JobDashboard,
      },
      {
        path: 'jobs',
        Component: TrackedJobs,
      },
      {
        path: 'resume',
        Component: Resume,
      },
      { path: 'cover-letters', Component: CoverLetters },
      {
        path: 'cover-letters/:jobID',
        Component: SingleCoverLetter,
      },
      {
        path: 'company-research',
        Component: Companies,
      },
      {
        path: 'company-research/:jobID',
        Component: SingleCompany,
      },
      { path: 'mock-interviews', Component: MockIntJobs },
      { path: 'mock-interviews/:jobID', Component: SingleMockInterview },
      { path: 'cold-email', Component: ColdEmailsJob },
      { path: 'cold-email/:jobID', Component: SingleColdEmail },
      { path: 'add-job', Component: AddJob },
    ],
  },
]);

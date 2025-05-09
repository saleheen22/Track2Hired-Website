import { Outlet } from 'react-router';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';
import Hero from '../pages/Home/Hero';
import StreamLine from '../pages/Home/StreamLine';

import LazyLoadSection from '../utils/LazyLoadSection'
import React, { Suspense, lazy } from 'react';
const JobSrCommander = lazy(() => import('../pages/Home/JobSrCommander'));
const GetTheExtension = lazy(() => import('../pages/Home/GetTheExtension'));
const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <StreamLine></StreamLine>
    <LazyLoadSection id="commander-section" threshold={0.2}>
        <Suspense fallback={<div className="text-center py-10">Loading Commander...</div>}>
          <JobSrCommander />
        </Suspense>
      </LazyLoadSection>
       <LazyLoadSection id="extension-section" threshold={0.2}>
        <Suspense fallback={<div className="text-center py-10">Loading Extension...</div>}>
          <GetTheExtension />
        </Suspense>
      </LazyLoadSection>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

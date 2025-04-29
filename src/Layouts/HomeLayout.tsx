import { Outlet } from 'react-router';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';
import Hero from '../pages/Home/Hero'
import StreamLine from '../pages/Home/StreamLine';
import JobSrCommander from '../pages/Home/JobSrCommander';
const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <StreamLine></StreamLine>
      <JobSrCommander></JobSrCommander>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

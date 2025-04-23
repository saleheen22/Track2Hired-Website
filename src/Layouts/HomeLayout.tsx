import { Outlet } from 'react-router';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';
import Hero from '../pages/Home/Hero'
import StreamLine from '../pages/Home/StreamLine';
const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <StreamLine></StreamLine>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

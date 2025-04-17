import { Outlet } from 'react-router';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';
import Hero from '../pages/Home/Hero'
const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

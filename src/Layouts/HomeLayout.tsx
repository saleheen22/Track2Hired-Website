import { Outlet } from 'react-router';
import Navbar from '../pages/Common/Navbar';
import Footer from '../pages/Common/Footer';

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;

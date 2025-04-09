import { Outlet } from 'react-router';
import Footer from '../pages/Common/Footer';
import Sidebar from '../pages/Common/Sidebar';
import DashboardNav from '../pages/Common/DashboardNav';

const Dashboard = () => {
  return (
    <div>
      <DashboardNav></DashboardNav>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;

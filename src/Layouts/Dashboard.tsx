import { Outlet } from 'react-router';
import Footer from '../pages/Common/Footer';
import Sidebar from '../pages/Common/Sidebar';
import DashboardNav from '../pages/Common/DashboardNav';

const Dashboard = () => {
  return (
    <div>
      <DashboardNav></DashboardNav>
      <Sidebar></Sidebar>
      <div className='ml-16 md:ml-64 '>
        < Outlet ></Outlet>
        </div>
    
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;

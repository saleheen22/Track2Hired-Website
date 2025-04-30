import { Outlet } from 'react-router';

import Sidebar from '../pages/Common/Sidebar';
import DashboardNav from '../pages/Common/DashboardNav';

const Dashboard = () => {
  return (
    <div>
      <DashboardNav></DashboardNav>
      <Sidebar></Sidebar>
      <div className='mx-auto md:ml-64 '>
        < Outlet ></Outlet>
        </div>
    
     
    </div>
  );
};

export default Dashboard;

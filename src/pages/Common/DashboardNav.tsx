import React, { useContext } from 'react';
import logo from '../../assets/logo_white.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router';

const DashboardNav = () => {

 

  const {user} = useContext(AuthContext);
  return (
    <div className= "sticky top-0 z-50 bg-[rgb(14_49_98/var(--tw-bg-opacity,1))] text-white  ">
     
     
      
 <div className="relative flex justify-between items-center p-4 m-0">
      {/* Left side (Logo or brand) */}
    <Link to= "/">
    <div className="logo px-2 pl-12 cursor-pointer flex justify-between " > 
   
   
   <img
      src={logo}
      alt="Track2Hired Logo"
      className="sm:h-9  h-12 w-auto mr-2 object-contain"
    />
   
    <h1 className="flex justify-center text-center text-bold my-auto text-3xl font-bold
">Track2Hired</h1>
    </div>
    </Link>
    
      <p>{user?.displayName}</p>

  
</div>

    </div>
    
  );
};

export default DashboardNav;

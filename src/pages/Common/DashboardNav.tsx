import React, { useContext, useEffect, useRef , useState} from 'react';
import logo from '../../assets/logo_white.png';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';

const DashboardNav = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
},[])
const handleLogout = async () => {
  await logOut();
  navigate('/login');
};

  const {user, logOut} = useContext(AuthContext);
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
    
      {/* <p>{user?.displayName}</p> */}

      {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded bg-slate-100  text-black transition"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="font-semibold">{user.displayName}</span>
              <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-slate-100 text-black rounded shadow-lg z-50">
                <div className="px-4 py-2 border-b font-medium">{user.displayName}</div>
                <button
                  className="w-full text-left px-4 py-2 btn bg-blue-500 text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
  
</div>

    </div>
    
  );
};

export default DashboardNav;

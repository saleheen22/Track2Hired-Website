import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import CopyableText from './CopyToClipBoard';

const Page = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <div>
      <h2>This is page</h2>
      {user && <h1>{user.email}</h1>}
      {user && <h1>{user.displayName}</h1>}
      {user && <button onClick={logOut} className='btn bg-blue-500 mt-4 ' >LogOut</button>}
      <div>
        <h1 className="text-3xl italic font-bold underline">Hello world!</h1>
        <button className="btn btn-success">Success</button>
      </div>
      <CopyableText />
    </div>
  );
};

export default Page;

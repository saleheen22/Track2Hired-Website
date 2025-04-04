import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Page = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <h2>This is page</h2>
      {user && <h1>{user.email}</h1>}
      <div>
        <h1 className="text-3xl italic font-bold underline">Hello world!</h1>
        <button className="btn btn-success">Success</button>
      </div>
    </div>
  );
};

export default Page;

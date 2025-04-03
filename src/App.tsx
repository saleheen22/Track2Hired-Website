import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl italic font-bold underline">Hello world!</h1>
        <button className="btn btn-success">Success</button>
      </div>
      <Outlet />
    </>
  );
}

export default App;

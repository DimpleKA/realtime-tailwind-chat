import React, { useState } from 'react';
import {
  BrowserRouter,Router,Routes,Route,Navigate
} from "react-router-dom";
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Registration from './Components/Registration';

interface AppProps {
  // Define your props interface here
}

const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState(0);
  const isLoggedIn = true;

   <Dashboard/>


  return (
    <BrowserRouter>
       <div className=''>
       <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/register" element={<Registration/>} />
       {isLoggedIn ? (
            <Route path="/dash" element={<Dashboard />} />
          ) : (
            <Navigate to="/" />
          )}
      </Routes>
       </div>
    </BrowserRouter>
  );
};

export default App;

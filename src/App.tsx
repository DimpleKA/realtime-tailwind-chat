import React, { useState } from 'react';
import './App.css';
import Chatpage from './Components/Chatpage';
import UserList from './Components/UserList';

interface AppProps {
  // Define your props interface here
}

const App: React.FC<AppProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='lg:flex sm:inline w-screen '>
       <UserList/>
      <Chatpage />
    </div>
  );
};

export default App;

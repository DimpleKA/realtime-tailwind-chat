import React from 'react'
import UserList from './Components/UserList'
import Chatpage from './Components/Chatpage'

const Dashboard = () => {
  return (
    <div className='lg:flex sm:inline w-screen '>
    <UserList/>
    <Chatpage />
    </div>
  )
}

export default Dashboard
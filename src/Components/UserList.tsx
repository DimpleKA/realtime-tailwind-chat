import React from 'react'
import type { RootState } from '../store.tsx'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../feature/responsive/responsiveSlice'
import UserListTop from './UserListTop'
import User from './User'
import './UserList.css'

const UserList = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className='lg:w-1/4 sm:w-lvw  '>
        <UserListTop/>

{/* left bottom users */}
    <div className='overflow-y-auto h-[80vh] hide-scrollbar'>
    <User/>
        <User/> 
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
    </div>
{/* left bottom users */}


    </div>
  )
}

export default UserList
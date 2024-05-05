import React from 'react'
import type { RootState } from '../store.tsx'
import { useSelector, useDispatch } from 'react-redux'
import {displayChat, displayUser,hideChat, hideUser } from '../feature/responsive/responsiveSlice'
import UserListTop from './UserListTop'
import User from './User'
import './UserList.css'

const UserList = () => {
  const userlist = useSelector((state: RootState) => state.responsive.userlist);
  const chatpage = useSelector((state:RootState)=>state.responsive.chatpage);
  const dispatch = useDispatch();

  return (
    <div className={ `lg:w-1/4 sm:w-lvw in-small-${userlist}`}>
        <UserListTop/>

{/* left bottom users */}
    <div className='overflow-y-auto h-[90vh] hide-scrollbar'>
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
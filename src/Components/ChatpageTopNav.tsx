import React from 'react';
import { UseSelector,useDispatch } from 'react-redux';
import {hideChat,displayChat,hideUser,displayUser} from '../feature/responsive/responsiveSlice'
import { RootState } from '../store';
import { UseDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './ChatPageTop.css'

const ChatpageTopNav = () => {
  const dispatch = useDispatch();
  const handleHideChat = () => {
    dispatch(hideChat());
    dispatch(displayUser(""));
  };

  return (
    <div className="w-full  h-16 flex items-center justify-between px-4">
      {/* Left divs */}
      <div className="flex items-center back-icon">
        <div onClick={handleHideChat}>
        <ArrowBackIosIcon />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://ashisheditz.com/wp-content/uploads/2023/11/nice-dp-pic-new.jpg"
            alt="dp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-2">
          <div className="text-white font-semibold">Vatsal Rishabh</div>
          <div className="text-green-500">Online</div>
        </div>
      </div>
      {/* Right divs */}
      <div className="text-white font-bold flex">
        <div className='mx-2  hover:bg-slate-600 p-2 rounded-full'>
          <AddIcCallIcon/>
        </div>
        <div className='mx-2  hover:bg-slate-600 p-2 rounded-full'>
          <VideocamIcon/>
        </div>
        <div className='mx-2 hover:bg-slate-600 p-2 rounded-full' >
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatpageTopNav;

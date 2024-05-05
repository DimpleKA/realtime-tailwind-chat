import React from 'react';
import { RootState } from '../store';
import { useDispatch } from 'react-redux';
import {hideUser,displayChat} from '../feature/responsive/responsiveSlice'

const User = () => {
  const dispatch = useDispatch()
  const handleHideUser=()=>{
    dispatch(hideUser());
    dispatch(displayChat(""));
  }
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300" onClick={handleHideUser}>
      <div className="flex items-center space-x-4">
        <div className="relative w-12 h-12">
          <img
            src="https://ashisheditz.com/wp-content/uploads/2023/11/nice-dp-pic-new.jpg"
            alt="dp"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <div className="text-lg font-bold text-gray-800">Vatsal Rishabh</div>
          <div className="text-sm text-gray-600">I am going to sleep. Please don't disturb.</div>
        </div>
      </div>
      <div className="text-sm text-gray-500">7:55 PM</div>
    </div>
  );
};

export default User;

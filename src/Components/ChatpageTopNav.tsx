import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const ChatpageTopNav = () => {
  return (
    <div className="w-full  h-16 flex items-center justify-between px-4">
      {/* Left divs */}
      <div className="flex items-center">
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
      <div className="text-white font-bold">
        <div>

        </div>
        <div>

        </div>
        <div>
        <LogoutIcon/>
        </div>
      </div>
    </div>
  );
};

export default ChatpageTopNav;

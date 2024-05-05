import React,{useEffect, useState} from 'react'
import { io, Socket } from 'socket.io-client';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../store';
import Chat from './Chat'
import ChatR from './ChatR'
import ChatpageTopNav from './ChatpageTopNav';
import ChatpageBot from './ChatpageBot';
import './Chatpage.css'
import TypingAnimation from './Typing';




interface ChatPageProps {
    // Define your props interface here

  }
const Chatpage: React.FC<ChatPageProps> = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const chatpage  = useSelector((state:RootState) => state.responsive.chatpage)
  const name:string ="Vatsal Rishabh";
  const time:string="12:22 pm";
  const message:string="Hi, this is Vatsal";
  const delivered:string="Delivered";

  useEffect(() => {
    // Connect to the server using Socket.IO
    const newSocket = io('http://localhost:5173'); // Replace with your server URL

    // Save the socket instance in state
    setSocket(newSocket);

    // Clean up on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Example of sending data to the server
    if (socket) {
      socket.emit('clientEvent', 'Hello from the client!');
    }
  }, [socket]);




  return (
    <div className={`Chatpage h-svh lg:w-3/4 sm:w-lvw in-small-${chatpage} `}>


{/* top starts */}
    <div className='Chatpage-top bg-gray-800'>
    <ChatpageTopNav/>
    </div>
{/* top ends */}
 

{/* mid starts */}
    <div className='Chatpage-mid'>
    <Chat name={name}  time={time} message={message} delivered={delivered} />
    <ChatR name="Dimple" time={time} message={message} delivered={delivered} />
    <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} /> <ChatR name="Dimple" time={time} message={message} delivered={delivered} />
    <TypingAnimation/>    
    </div>
{/* mid ends */}

{/* bottom starts */}
    <div className='Chatpage-bot '>
    <ChatpageBot/>
    </div>
{/* bottm enda */}




    </div>
  )
}

export default Chatpage
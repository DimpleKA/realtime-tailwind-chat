import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Chat from './Chat'
import ChatR from './ChatR'
import ChatpageTopNav from './ChatpageTopNav';
import ChatpageBot from './ChatpageBot';
import './Chatpage.css'
import TypingAnimation from './Typing';
import { RootState } from '../store';



interface ChatPageProps {
    // Define your props interface here

  }
const Chatpage: React.FC<ChatPageProps> = () => {
  const chatpage  = useSelector((state:RootState) => state.responsive.chatpage)
  console.log(chatpage)
  const name:string ="Vatsal Rishabh";
  const time:string="12:22 pm";
  const message:string="Hi, this is Vatsal";
  const delivered:string="Delivered";
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
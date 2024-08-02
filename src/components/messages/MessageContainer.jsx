import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'


function MessageContainer() {
  return (
    <>
       {/* <div className='md:min-w-[450px] flex flex-col'>
      <>
      <div className='bg-slate-500 px-4 py-2 mb-2'>
      <span className='label-text me-2'>To:</span>
      <span className='text-gray-900 font-bold'>Ashwin</span>
      </div>
      <Messages/>
      <MessageInput/>
        
      </>

    </div> */}

    {/* Need to be conditinally rendered */}

    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-x text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Select a chat to start Messaging</p>

      </div>
      
    </div>
    </>
   
  )
}

export default MessageContainer
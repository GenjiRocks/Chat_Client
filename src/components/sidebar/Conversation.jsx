// For seperate conversations

import React from 'react'

function Conversation() {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src='https://cdn-icons-png.flaticon.com/128/4140/4140048.png' alt='Avatar' />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div>
                <p className='font-bold text-gray-200'>Ashwin Deepak </p>
            </div>

        </div>
    </div>
    <div>
    <div className='divider my-0 py-0 h-1' />
    </div>
    </>
  )
}

export default Conversation
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function MessageInput() {
  return (
    <form action="" className='px-4 my-3'>  
        <div className='w-full relative'>
            <input type="text"
             className='w-full p-2 border border-gray-50 rounded-lg bg-gray-800 text-white'
             placeholder='Send a message'
             
             ></input>
             <button type="submit" className='text-white absolute end-0 inset-y-0 flex items-center pe-3 '><FontAwesomeIcon icon={faPaperPlane} /></button>

        </div>

    </form>
  )
}

export default MessageInput
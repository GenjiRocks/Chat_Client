import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchInput() {
  return (
    <>
    <form className='flex items-center gap-2'>
 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                    <FontAwesomeIcon className='w-6 h-6 outline-none' icon={faMagnifyingGlass}  />
 			</button>
 		</form>
    
    </>
  )
}

export default SearchInput
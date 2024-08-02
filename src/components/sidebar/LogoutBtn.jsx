import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function LogoutBtn() {
  return (
    <>
    <div className='mt-auto'>
    <FontAwesomeIcon className='w-8 h-8 text-white cursor-pointer' icon={faRightFromBracket}  />
    </div>
    </>
  )
}

export default LogoutBtn
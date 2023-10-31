import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus, faCartArrowDown} from '@fortawesome/free-solid-svg-icons'

export const AddItems = () => {
  return <FontAwesomeIcon className='cart-item' icon={faCartPlus} /> 
}

export const RemoveItems = ()=>{
    return <FontAwesomeIcon icon={faCartArrowDown}/>
}

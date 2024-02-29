import React from 'react'
import './button.css'
const Button = ({title,onClick}) => {
  return (
    <div className='button_container'onClick={onClick} >{title}</div>
  )
}

export default Button
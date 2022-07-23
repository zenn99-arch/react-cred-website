import React from 'react'
import "./Button.css"

const Button = ({buttonText, onClick, customClass, prefix}) => {
  return (
    <div className={`flex absolute-center button-wrapper ${customClass} `} onClick={onClick} >{prefix} {buttonText} </div>
  )
}

export default Button
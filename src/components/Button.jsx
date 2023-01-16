import React from 'react'

const Button = ({text,hover}) => {
  return (
    <button className={`px-3 py-2 bg-[#A555EC] rounded-md text-white transition-all ease-in duration-300 ${hover ? hover : 'hover:[#b674f0]'}`}>
        {text}
    </button>
  )
}

export default Button
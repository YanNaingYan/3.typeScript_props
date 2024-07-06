import React from 'react'

type ButtonProps = {
    handleClick : (event:React.MouseEvent<HTMLButtonElement>,id:number)=> void
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event)=>props.handleClick(event,2)} className='rounded-lg active:bg-gray-600 px-2 py-1 bg-gray-400 m-2 '>Button</button>
  )
}

export default Button
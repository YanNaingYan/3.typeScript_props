import React from 'react'

type InputProps = {
    value:'',
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props: InputProps) => {
  return (
<input value={props.value} onChange={props.handleChange} className='border p-2'/>
  )
}

export default Input
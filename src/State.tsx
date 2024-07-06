import React, { useState } from 'react'


const State = () => {
    const [isLogin,setIsLogin] = useState(false)
    const handleLogin =()=>{
    setIsLogin(true)
    }
    const handleLogout =()=>{
        setIsLogin(false)
        }


  return (
    <div>
        <button onClick={handleLogin}  className='rounded-lg active:bg-gray-600 px-2 py-1 bg-gray-400 m-2 '>Log In</button>
        <button onClick={handleLogout} className='rounded-lg active:bg-gray-600 px-2 py-1 bg-gray-400 m-2 '>Log Out</button>

        <h1>{isLogin?   "Logged in" : "Logged out"}</h1>
    </div>
  )
}

export default State
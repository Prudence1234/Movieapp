import React, { useState } from 'react'
import '../App.css';

const Account = () => {

const[current,setCurrent]=useState("")

    function Login (){
        return(
        setCurrent(false)
    )}
    function Register(){
        return(
        setCurrent(true)
    )}
  return (
    <div className='form'>
        <div className="form-container">
        <div className="form-btn">
            <span onclick={Login}>Login</span>
            <span onclick={Register}>Register</span>
                <hr className='Indicator'/>
        </div>
            <form className='LoginForm'>
              <input type="text" placeholder="Username"/>
              <input type="password" placeholder="Password"/>
              <button type="submit" className="btn">Login</button>
              <a href="">Forgot Password</a>
            </form>
              <form className="RegForm">
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit" className="btn">Register</button>
            </form>
     </div>
</div>

  )
}

export default Account
import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
       <input required type="text" placeholder='username' />
       <input required type="email" placeholder='your email' />
       <input required type="password" placeholder='your password' />
       <button>Login</button>
       <p> This is an error.</p>
       <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register
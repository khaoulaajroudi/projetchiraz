import React from 'react'
import "./SignUp.css"
import Navbar from '../Navbar/Navbar'

const SignUp = () => {
  return (
    <>
        <Navbar />

    
    <form method="get" action="javascript: void(0);" id="login-form" className="loginform" autocomplete="off" role="main">
    <h1 class="a11y-hidden">Login Form</h1>
    <div>
    <label for="exampleInputName">
      <span class="required">First Name</span>
    <input type="name" class="text" id="exampleInputName" placeholder="Name" /></label>
    <label for="exampleInputName">
      <span class="required">last Name </span>
    <input type="name" class="text" id="exampleInputName" placeholder="last Name" /></label>
          
      <label class="label-email">
        <input type="email" class="text" name="email" placeholder="Email" tabindex="1" required />
        <span class="required">Email</span>
      </label>
    </div>
    <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
    <label class="label-show-password" for="show-password">
      <span>Show Password</span>
    </label>
    <div>
      <label class="label-password">
        <input type="text" class="text" name="password" placeholder="Password" tabindex="2" required />
        <span class="required">Password</span>
      </label>
    </div>
    <input type="submit" value="Register" />
  </form>
  </>
  )
}

export default SignUp

import React from 'react'
// import useState from 'react'
// import ToggleForm from 'react'
// import Toggle  from './Toggle';
import './Login.css';

 const Login = () => {
  // const toggleForm = () => {
    // const container =
    // document.querySelector('container');
    // container.classList.toggle('active');
    //       // const[switch,setSwitch]= useState('Login')
  return (
   
   

  <div>

  <section>
    <div className="container">
      <div className="user signinBx">
        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
        <div className="formBx">
          <form action="" onsubmit="return false;">
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
            <p className="signup">
              Don't have an account ?
              <a href="#" onclick="toggleForm()">Sign Up.</a>
            </p>
          </form>
        </div>
      </div>



      <div className="user signupBx">
        <div className="formBx">
          <form action="" onsubmit="return false;">
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Create Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <input type="submit" name="" value="Sign Up" />
            <p className="signup">
              Already have an account ?
              <a href="#" onclick="toggleForm();">Sign in.</a>
            </p>
          </form>
        </div>
        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
      </div>
    </div>
    </section>



    </div>
  )
}
  
 


export default Login
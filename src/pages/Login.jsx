import React from 'react'

const Login = () => {
  return (
    <>
       <div className='backguondes'>
        
    {/* <!-- Login form /--> */}
    <form action="" method="post" id="Login" className='formes'>
      {/* <!-- Left section of the form --> */}
      <div class="leftsides">
        <div className='underdiv'>
          {/* <!-- Welcome message and registration link --> */}
          <p>Hello, Welcome!</p>
          <a href="">Don't have an account? </a>
          {/* <input type="submit" name="" id="" value="Register" /> */}
        </div>
      </div>

      {/* <!-- Right section of the form --> */}
      <div class="rightsides ">
        <div>
          {/* <!-- Login heading --> */}
          <h1>Login</h1>

          {/* <!-- Username input field --> */}
          <input type="text" name="Username" id="" placeholder="Username" />
          <span class="material-symbols-outlined person"> <i class="fa-solid fa-user"></i> </span>

          {/* <!-- Password input field --> */}
          <input type="password" name="Password" id="" placeholder="Password" />
          <span class="material-symbols-outlined lock"> <i class="fa-solid fa-lock"></i> </span>


          {/* <!-- Login button --> */}
          <button type="submit">Login</button>
          
          {/* <!-- Forgot password link --> */}
          <a href="/Register" >Create Account</a>

          {/* <!-- Social login options --> */}
          {/* <p>or login with social platforms</p> */}
          {/* <div>
          
            <a href=""><i class="fa-brands fa-google fa-align-center"></i> </a>
            <a href=""><i class="fa-brands fa-facebook-f fa-align-center"></i></a>
            <a href=""><i class="fa-brands fa-github fa-align-center"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in fa-align-center"></i></a>
          </div> */}
        </div>
      </div>
    </form>

       </div>
    </>
  )
}

export default Login

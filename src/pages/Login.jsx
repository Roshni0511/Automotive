import React from 'react'

const Login = () => {
  return (
    <>
       <div className='backguondes'>
        
    <form action="" method="post" id="Login" className='formes'>
      <div class="leftsides">
        <div className='underdiv'>
          <p>Hello, Welcome!</p>
          <a href="">Don't have an account? </a>
        </div>
      </div>

      <div class="rightsides ">
        <div>
          <h1>Login</h1>

          <input type="text" name="Username" id="" placeholder="Username" />
          <span class="material-symbols-outlined person">  </span>

          <input type="password" name="Password" id="" placeholder="Password" />
          <span class="material-symbols-outlined lock">  </span>


          <button type="submit">Login</button>
          
          <a href="/Register" style={{textDecoration:"underline"}}>Create Account</a>

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

import React from 'react'

const Section = () => {
  return (
  
    <section id="login-window">
    <h1>Login</h1>
    <form id="login">
      <p className="title">Login ID</p>
      <input
        type="text"
        placeholder="Enter Login ID"
        className="form-input"
        autoComplete="off"
        id="loginId"
      />
      <p className="error" id="loginId-error">
        *login id is required !
      </p>

      <p className="pass-title">Password</p>
      <input
        type="password"
        
        placeholder="Enter Password" 
        className="form-input"
        autoComplete="off"
        id="password"
      ></input>
           
      <p className="error" id="password-error">
        *Password is required !
      </p>
     

      <div>
        <p className="pass-change">
          <a href="#">Change Password</a>
        </p>
        <div>
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <div>
          <input type="checkbox" />
          <span>
            Agree to <a href="#">Term & Condition</a>{" "}
          </span>
        </div>

        <button className="login-btn">Login</button>
      </div>
    </form>
    <p>or login with</p>
    <div className="social">
      <button>
        <i className="fa fa-facebook-square" aria-hidden="true"></i>Facebook
      </button>
      <button>
        <i className="fa fa-google"></i>Google
      </button>
    </div>
    <p className="form-footer">
      don't have an account? <a href="#">Register Here</a>
    </p>
  </section>
  
)}

export default Section;
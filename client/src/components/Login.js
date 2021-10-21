import React from 'react';
import loginIng from '../images/login.svg';

export default function Login() {
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginIng} alt="logoForm"/>
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
          </div>

          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="password" name="username" placeholder="password"/>
          </div>
          <div className="footer">
            <button type="button" className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

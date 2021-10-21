import React from 'react';
import loginIng from '../images/login.svg';

export default function Register() {
  return (
    <div>
      <div className="base-container">
      <div className="header">Register</div>
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
            <label htmlFor="username">Email</label>
            <input type="email" name="email" placeholder="email"/>
          </div>

          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="password" name="username" placeholder="password"/>
          </div>

          <div className="footer">
            <button type="button" className="btn">Register</button>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

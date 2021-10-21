import React from 'react';
import loginIng from '../images/logo.svg';

export default function Login() {
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginIng} alt="logoForm"/>
        </div>
      </div>
    </div>
  )
}

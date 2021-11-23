import React from 'react';
import loginIng from '../images/login.svg';
import { Link } from 'react-router-dom';

export default function Login({ containerRef }) {
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginIng} alt="logoForm" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username or email"
              className="app-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="username"
              placeholder="password"
              className="app-input"
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn-account">
              Login
            </button>
            <Link to={'/register'} style={{ textDecoration: 'none' }}>
              <p>You do not have an account?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

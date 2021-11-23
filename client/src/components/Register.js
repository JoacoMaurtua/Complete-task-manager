import React from 'react';
import RegisterIng from '../images/register.svg';

export default function Register({ containerRef }) {
  return (
    <div>
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={RegisterIng} alt="logoForm" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="app-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import loginIng from '../images/login.svg';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Login({loginOk, setLoginOk}) {
  
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const history = useHistory();

  const onChange= (event) => {
    const {name, value} = event.target;
    setLogin({
      ...login,
      [name]:value
    })
  }

  const home = (event) => {
    history.push(`/task`);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/users/login", login)
      .then(response => {
        if(response.data && !response.data.error){
          setLoginOk(true);
          home(event);
        } else {
          Swal.fire({
            icon: "error",
            title: "Login",
            text: response.data.message
          })
        }
      })
  }

  const {email, password} = login;

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginIng} alt="logoForm" />
        </div>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="E-mail"
              className="app-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="password"
              className="app-input"
              required
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
        </form>
      </div>
    </div>
  );
}

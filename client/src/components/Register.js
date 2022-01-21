import React from 'react';
import RegisterIng from '../images/register.svg';
import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';

export default function Register({ users, setUsers }) {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: ""
  })

  const onChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]:value
    })
  }

  const createUser = async (event) => {
    axios.post(`/api/users/register`, input)
      .then(response => {
          if(response.data && response.data.data){
              setUsers(users.concat([response.data.data]));
              Swal.fire({
                  icon: "success",
                  text: "Registered with success!!"
              })
          } else {
              Swal.fire({
                  icon: "error",
                  text: response.data.message
              })
          }
      })

      .catch (err => Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while register a new user'
      }) )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    createUser(event);
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }

  const {userName, email, password} = input;
  console.log(input);
  return (
    <div>
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={RegisterIng} alt="logoForm" />
          </div>
          <form className="form" onSubmit={onSubmit} >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                ref={nameRef}
                type="text"
                name="userName"
                value={userName}
                onChange={onChange}
                placeholder="username"
                className="app-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="email"
                className="app-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="password"
                className="app-input"
              />
            </div>

            <div className="footer">
              <button type="submit" className="btn-account">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useHistory} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import jwt_decode from "jwt-decode";

const Logout = () => {
    const history = useHistory();
    let userNameActual
    const token = document.cookie.split("=")[1];
    if(token){
        const userObject = jwt_decode(token);
        console.log({cookiesAuth: document.cookie});
        console.log({cookiesAuth: userObject})
        userNameActual=userObject.userName;
        console.log({userNameActual: userNameActual});
    }

    const logOut = (event) => {
        axios.get("/api/users/logout")
        Swal.fire({
            title:"Log-out",
            text: "Are you sure you want to exit the application?",
            icon: "warning",
            showCancelButton: true
        }).then(response => {
            if(response.value){
            history.push(`/`);        
            }
        })
        
    }

    return (
        <div className="logoutContainer">
        <NavDropdown title={`${userNameActual ? userNameActual : 'Log-in please!!!'}`}>
            <NavDropdown.Item className="logoutSlice" onClick={(event) => logOut(event)}>
            <i class="fas fa-sign-out-alt"></i> Logout
            </NavDropdown.Item>
        </NavDropdown>
        </div>
    
    );
}

export default Logout;

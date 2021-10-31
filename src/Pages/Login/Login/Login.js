import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location= useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const googleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }



    return (
        <div className="margin-top">
            <div className="login-image">
                <img src="https://st2.depositphotos.com/1008347/6291/i/600/depositphotos_62910831-stock-photo-businessman-typing-login-and-password.jpg" alt="" />
            </div>
            <div>
            <h2>Please Login</h2>
            <button onClick={googleLogin} className="all-btn">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;
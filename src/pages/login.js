import React from "react";
import { auth, provider } from "../firebase-config"

import { signInWithPopup } from "firebase/auth"
import { useNavigate } from 'react-router-dom'; //this gets you to the desired page


function Login({
    setIsAuth
}) {

    let navigate = useNavigate();
    // this is for login in and sign up 
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");//sends you to the home page once you are logged in 
        })
    }
    return (
        <div className='loginPage'>
            <p>Sign In with Google to continue</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}


export default Login;
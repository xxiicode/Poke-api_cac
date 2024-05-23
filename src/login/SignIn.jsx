import React from 'react';

import { useState, useEffect } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

const SignIn = () => {
    const [value,setValue]= useState("");
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) =>{
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    })

    return (
        <div> 
            {""}
            {value ? <Home/> : <div className='botonIng'><button className="btn btn-info" onClick={handleClick}>Sign in with GOOGLE</button></div>}
        </div>
    )
}
export default SignIn
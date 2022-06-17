import React from 'react'
import { useMoralis } from 'react-moralis'
import { useState } from 'react';

const SignUp = () => {
    const {signup} = useMoralis();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return(
        <div className='form'>
            <h4>Sign Up</h4>
            <input className='inputs' placeholder='email' value={email} onChange={(event) => setEmail(event.currentTarget.value)}></input>
            <input className='inputs' placeholder='password' type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)}></input>
            <button className='button' onClick={() => signup(email,password)}>Sign Up</button>
        </div>
    )
}

export default SignUp
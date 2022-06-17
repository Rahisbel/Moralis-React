import React from 'react'
import { useMoralis } from 'react-moralis'
import { useState } from 'react';

const Login = () => {
    const {login} = useMoralis();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return(
        <div className='form'>
            <h4>Login</h4>
            <input className='inputs' placeholder='email' value={email} onChange={(event) => setEmail(event.currentTarget.value)}></input>
            <input className='inputs' placeholder='password' value={password} onChange={(event) => setPassword(event.currentTarget.value)}></input>
            <button className='button' onClick={() => login(email,password)}>Login</button>
        </div>
    )

}

export default Login
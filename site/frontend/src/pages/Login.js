import React, { useState } from 'react';
import logo from "../assets/logo.jpg"
import './Login.css';

import api from '../services/api';

export default function Login({ history }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function register(e){
        e.preventDefault();
        history.push('/register');
    }

    async function login(e){
        e.preventDefault();

        if(await api.post('/login', {username, password})){
            history.push('/main');
        }else{
            history.push('/');
        }
    }

    return(
        <div className="login-container">
            <form onSubmit={login}>
                <img src={logo} alt="KillNow"/>
                <input 
                    placeholder="username"
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="***********"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <form onClick={register}>
                    <button type="button">Register</button>
                </form>
            </form>
        </div>
    );
}
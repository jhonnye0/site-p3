import React, { useState } from 'react';
import './Register.css'
import logo from "../assets/logo.jpg"
import api from '../services/api';


export default function Register({history}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [bio, setBio] = useState('');
    const [value, setValue] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/user', {username, password, bio, type, value}, {withCredentials: true});
        history.push('/main');
    }

    function back(e){
        e.preventDefault();
        history.push('/');
    }

    return(
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <button onClick={back} id='btn-back-register' type="button">Back</button>
                <img src={logo} alt="KillNow"/>
                <input 
                    placeholder="username"
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input 
                    placeholder="Type(Assassin or User)"
                    value={type} 
                    onChange={e => setType(e.target.value)}
                />
                <input 
                    placeholder="Bio"
                    value={bio} 
                    onChange={e => setBio(e.target.value)}
                />
                <input 
                    placeholder="Value"
                    value={value} 
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>    
    );
}
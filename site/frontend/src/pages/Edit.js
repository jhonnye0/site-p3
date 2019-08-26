import React, { useState, useEffect } from 'react';
import './css/Edit.css'
import api from '../services/api';

export default function Edit({ history, match }){
    
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [bio, setBio] = useState('');
    const [value, setValue] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        async function loadUser(){
            const user = await api.post(`/login/user`, null, {
                headers:{
                    user: match.params.userId
                }
            });
            setUser(user);
            setUsername(user.data.username)
            setPassword(user.data.password);
            setBio(user.data.bio);
            setType(user.data.type);
            setValue(user.data.value);
            setAvatar(user.data.avatar);
        }
        loadUser();
    }, []);
   
    async function handleSubmit(e){
        e.preventDefault();
        await api.post(`/user/${match.params.userId}/edit`, {
            password,
            bio,
            value,
            avatar,
            type
        });

        history.push(`/user/${match.params.userId}`);
    }

    function backtoMain(e){
        e.preventDefault();
        history.push(`/user/${user.data._id}`);
    }

    return(
        <div className="update-container">

            <form onSubmit={handleSubmit}>
                <button id="back-btn" onClick={backtoMain} type="button">Back</button>
                <img src={avatar} alt="user-avatar"/>
                <strong>{username}</strong>
                <input 
                    type="password"
                    placeholder="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <select onChange={e => setType(e.target.value)}>
                    <option value="" disabled selected>Select</option>
                    <option value="Assassin">Assassin</option>
                    <option value="User">User</option>
                </select>

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
                <button type="submit">Update</button>
            </form>
        </div>        
    );
}
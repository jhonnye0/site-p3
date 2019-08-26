import React, { useEffect, useState } from 'react';
import './css/Main.css'
import logo from "../assets/logo.jpg"
import api from '../services/api';

export default function Main({history, match}){

    const [users, setUsers] = useState([]);

    function backtoLog(e){
        e.preventDefault();
        history.push('/');
    }

    // useEffect(() => {
    //     async function loadUser(){
    //         const user = await api.post('/login/user', null, {
    //             headers:{
    //                 user : match.params.userId
    //             }
    //         });
    //     }
    // }, [])

    // function toList(){
    //     history.push('/admin/users');
    // }

    async function handleLike(id){

        await api.post(`/user/assassins/${id}/likes`, null, { 
            headers: {
                user: match.params.userId
            }
        });
    }

    function toEdit(e){
        e.preventDefault();
        history.push(`/edit/user/${match.params.userId}`);
    }

    function handleContract(id){
        history.push(`/contract/${match.params.userId}/${id}`);
    }

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get(`/user/${match.params.userId}`);
            setUsers(response.data);
        }
        loadUsers();

    }, [users, match.params.userId]);
    
    return (
        <div className="main-container">
            <div className="Logo">
                <img src={logo} alt="KillNow" />
                <div>
                    <button onClick={backtoLog} type="button">Log Out</button>
                    <button onClick={toEdit} type="button">Edit Info</button>
                </div>
            </div>
            
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.username}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button" onClick={() => {handleLike(user._id)}}>Like: {user.likes.length}</button>
                            <button type="button" onClick={() => {handleContract(user._id)}}>Hire</button>
                        </div>
                     </li>
                ))}
                
            </ul>   
        </div>
    );
}
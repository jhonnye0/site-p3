import React, { useState, useEffect } from 'react';
import './css/Contract.css'
import logo from "../assets/logo.jpg"
import api from '../services/api';

export default function Contract({history, match}){

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [buyer, setBuyer] = useState({});
    const [hitman, setHitman] = useState({});

    useEffect(() => {
        async function loadUsers(){
            const userBuyer = await api.post(`/login/user`, null, {
                headers:{
                    user: match.params.userId
                }
            });
            setBuyer(userBuyer);

            const userHitman = await api.post(`/login/user`, null, {
                headers:{
                    user: match.params.id
                }
            });
            setHitman(userHitman);
        }
        loadUsers();
    }, []);

    function backtoLog(e){
        e.preventDefault();
        history.push('/');
    }
    
    function backtoMain(e){
        e.preventDefault();
        history.push(`/user/${buyer.data._id}`);
    }

    async function hireContract(e){
        e.preventDefault();

        console.log(value);

        if(value !== undefined && hitman !== undefined && buyer !== undefined){

            await api.post(`/user/assassins/${hitman.data._id}/contract`, null, {
                headers:{
                    user: buyer.data._id,
                    value, 
                    description
                }
            });

            history.push(`/user/${buyer.data._id}`);
        }
    }

    return(

        <div className="contract-container">
            
            <div className="Logo">
                <img src={logo} alt="KillNow" />
                <div>
                    <button onClick={backtoLog} type="button">Log Out</button>
                    <button onClick={backtoMain} type="button">Back</button>
                </div>
            </div>

            { 
                buyer.data !== undefined && hitman.data !== undefined ?
                <ul>
                    <li>
                        <li key={buyer.data._id}>
                            <img src={buyer.data.avatar} alt={buyer.data.username} />
                            <footer>
                                <strong>{buyer.data.username}</strong>
                            </footer>
                        </li>
                    </li>

                    <li>
                        <form onSubmit={hireContract}>
                            <input 
                                placeholder="Value"
                                value={value} 
                                onChange={e => setValue(e.target.value)}
                            />
                            <input
                                id="descript" 
                                placeholder="Description"
                                value={description} 
                                onChange={e => setDescription(e.target.value)}
                            />
                            <button type="submit">Hire</button>
                        </form>
                                                           
                    </li>

                    <li>
                        <li key={hitman.data._id}>
                            <img src={hitman.data.avatar} alt={hitman.data.username} />
                            <footer>
                                <strong>{hitman.data.username}</strong>
                            </footer>
                        </li>
                    </li>

                </ul>  
                
                : 
                
                <h1>Hello World!</h1>  
            }
            
        </div>
    );
}
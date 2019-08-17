import React from 'react';
import './Main.css'
import logo from "../assets/logo.jpg"
import usuario from "../assets/usuario.png"

export default function Main({username, history}){
    
    function backtoLog(e){
        e.preventDefault();
        history.push('/');
    }
    
    return (
        <div className="main-container">
            <div className="Logo">
                <img src={logo} alt="KillNow" />
                <div>
                    <button onClick={backtoLog} type="button">Log Out</button>
                </div>
            </div>
            
            <ul>
                <li>
                    <img src={usuario} alt="Usuario" />
                    <footer>
                        <strong>Jhonnye G Oliveira</strong>
                        <p>Aceito contratos no precinho da casa</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">Like</button>
                        <button type="submit">Hire</button>
                    </div>
                </li>
                    
                    
                <li>
                    <img src={usuario} alt="Usuario" />
                    <footer>
                        <strong>Jhonnye G Oliveira</strong>
                        <p>Aceito contratos no precinho da casa</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">Like</button>
                        <button type="submit">Hire</button>
                    </div>
                </li>
                    
                    
                <li>
                    <img src={usuario} alt="Usuario" />
                    <footer>
                        <strong>Jhonnye G Oliveira</strong>
                        <p>Aceito contratos no precinho da casa</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">Like</button>
                        <button type="submit">Hire</button>
                    </div>
                </li>
                    
                    
                <li>
                    <img src={usuario} alt="Usuario" />
                    <footer>
                        <strong>Jhonnye G Oliveira</strong>
                        <p>Aceito contratos no precinho da casa</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">Like</button>
                        <button type="submit">Hire</button>
                    </div>
                </li>
            
            </ul>   
        </div>
        );
    }
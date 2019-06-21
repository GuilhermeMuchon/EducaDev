import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import user from '../images/user.png';

export default function Header(){
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <h1>EducaDev</h1>
                </Link>
                <Link to="/new">
                    <img src={user} alt="Informações do usuário" />
                </Link>
            </div>
        </header>
    );
}
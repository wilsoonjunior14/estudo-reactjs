import React from "react";
import logo from '../logo.svg';
import '../layout.css';

export default function Header(){
    return (<div>
        <nav className="navbar">
            <img className="navbar-img" src={logo} width="100" height="60" />
            <h4 className="navbar-title">App Js</h4>
        </nav>
    </div>);
}
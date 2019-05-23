import React from 'react';
import logo from '../../logo.png';
import './Navbar.scss';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours logo"/>
            <ul className="nav-links">
                <li>
                    <NavLink exact to="/" activeClassName="active" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active" className="nav-link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tours" activeClassName="active" className="nav-link">
                        Tours
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

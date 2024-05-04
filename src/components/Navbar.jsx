import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, SetmenuOpen] = useState(false);
    return (
        <nav>
            <Link to="/" className='title'>Website</Link>
            <div className="menu" onClick={() => SetmenuOpen(!menuOpen)}>
                <span/>
                <span/>
                <span/>
            </div>
            <ul className={menuOpen ? "open": ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink to="/Login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    // Navlink solo nos sirve para poner una clase y se muestre activado la ruta donde estamos
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
            </div>
        </nav>
    )
}

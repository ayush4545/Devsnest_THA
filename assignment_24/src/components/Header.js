import React from 'react'
import "./css/Header.css"
import { NavLink } from 'react-router-dom'
function Header({login,setLogin}) {
    console.log(login)
    return (
        <div className="header">
             <NavLink to='/'>Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to={`${!login ?"/" :"/profile"}`} onClick={()=>login?setLogin(true):setLogin(false)}>Profile</NavLink>
             <NavLink to={`${!login ?"/" :"/dashboard"}`}>Dashboard</NavLink>
        </div>
    )
}

export default Header

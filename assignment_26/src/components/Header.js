import React from 'react'
import "./css/Header.css"
import { NavLink } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import {  Login } from '../action/index.js'
function Header() {
    console.log(Login)
    const dispatch=useDispatch();
    const login_status=useSelector(state=>state.loginStatus)
    console.log(dispatch,login_status)
    return (
        <div className="header">
             <NavLink to='/'>Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to={`${!login_status ?"/" :"/profile"}`} onClick={()=>login_status?dispatch( Login(true)):dispatch( Login(false))}>Profile</NavLink>
             <NavLink to={`${!login_status ?"/" :"/dashboard"}`}>Dashboard</NavLink>
        </div>
    )
}

export default Header

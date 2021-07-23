import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import {  Login } from '../action/index.js'
function Home() {
    const dispatch=useDispatch();
    const login_status=useSelector(state=>state.loginStatus)
    return (
        <div className="home">
            <h1>Home</h1>
            <h2>If not logged in can't access Profile & Dashboard</h2>
           {login_status? <button onClick={()=>dispatch( Login(false))}>Logout</button> :<button onClick={()=>dispatch( Login(true))}>Login</button>} 
        </div>
    )
}

export default Home

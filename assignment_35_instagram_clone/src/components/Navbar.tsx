import React from 'react'
import "./css/Navbar.scss"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import {useSelector} from "react-redux"
const Navbar = () => {
    const user=useSelector((state:any)=>state.user)
    return (
        <div className="navBar">
               <img className="logo" src="/images/logo.png"/>
               <div className="search">
                   <input className="inputField" type="text" placeholder="Search"/>
                   <SearchIcon  className="searchIcon"/>
               </div>

               <div className="icons">
                   <HomeIcon  className="icon"/>
                   <ChatIcon className="icon" />
                   <ExploreOutlinedIcon  className="icon"/>
                   <FavoriteBorderIcon className="icon" />
                   <Avatar src={user.profilePicture} alt={user.username} className="profilePic"/>
               </div>
        </div>
    )
}

export default Navbar

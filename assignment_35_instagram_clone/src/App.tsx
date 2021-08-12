import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {useDispatch,useSelector} from "react-redux"
import {User,updateUser} from "./redux/actions/index"
import { useEffect } from 'react';
import Landling from './components/Landling';
import { useState } from 'react';

export interface postType{
  username:string,
  post:string
}

function App() {
  const dispatch=useDispatch();
  const user=useSelector((state:any)=>state.user)
  const [posts,setPosts]=useState<postType[]>([]);

  useEffect(()=>{
     dispatch(updateUser())

     fetch("/data/post.json")
     .then(res=>res.json())
     .then((data)=>setPosts(data))
  },[])
  return (
    <div className="App">
      <Navbar/>
       <Landling posts={posts}/>
    </div>
  );
}

export default App;

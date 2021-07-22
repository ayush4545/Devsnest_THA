import React, { useEffect, useState } from 'react'

import './App.css';
import Content from './components/Content';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
function App() {
  const [open,setOpen]=useState(false)
  
  console.log(open)
  
  return (
    <div className="app">
      <NavBar  open={open} setOpen={setOpen}/>
      {open?<DropDown />:null}
      <Hero />
      <Content />
      <Footer />
   </div>
      );
}

      export default App;


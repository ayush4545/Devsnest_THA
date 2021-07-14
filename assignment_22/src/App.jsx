import { useState,useEffect } from 'react';
import './App.css';
import Memes from './components/Memes';
import Templates from './components/Templates';

function App() {

  const [templates,setTemplate]=useState([]);
  const [memes,setMemes]=useState(null);
  useEffect( async ()=>{
    const response= await fetch("https://api.imgflip.com/get_memes");
    const data=await response.json()
    const memes=data.data.memes
    setTemplate(memes)
  },[])


  return (
    <div className="app">
          <h1>Memes Generator</h1>
          {memes===null ?  <Templates templates={templates} setMemes={setMemes}/> : <Memes memes={memes} setMemes={setMemes}/>}
         
    </div>
  );
}

export default App;

import React ,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import About from './components/About';
function App() {
  const [login,setLogin]=useState(false)
  return (
    <div className="app">
     
       <Router>
             <Header login={login} setLogin={setLogin}/>
           
        <Switch>
          <Route exact path="/">
                   <Home login={login} setLogin={setLogin}/>
          </Route>
          <Route exact path="/about">
                   <About/>
          </Route>

           <Route path='/dashboard'>
             <Dashboard />
          </Route>
          
          <Route path='/profile'>
             <Profile />
          </Route>

          
        </Switch>

      </Router>
         
    </div>
  );
}

export default App;

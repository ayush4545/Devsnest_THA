import React, { useState } from 'react'
import { addItem } from './action/todoAction';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import Todo from './components/Todo';

function App() {

  return (
   <Todo />
  );
}

export default App;

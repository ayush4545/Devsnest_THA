import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo,deleteTodo,removeTodo} from "../action/todoAction"
import "./todo.css"
function Todo() {

    const [inputData,setInputData]=useState('')
    const list=useSelector((state)=>state.list) 
    const dispatch=useDispatch()

    console.log(list)
    const addItems=()=>{
        if(inputData!==""){
            dispatch(addTodo(inputData))
        }

        setInputData('')
    }
    return (
        <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your Item Here</figcaption>
          </figure>

          <div className="addItems">
            <input type="text" placeholder="Enter your items here" value={inputData} onChange={(e)=>{setInputData(e.target.value)}}/>
            <i className='fa fa-plus add-btn' onClick={addItems }></i>
          </div>

          <div className="showItems">
          {
              list.map((elem)=>(
                <div className="eachItem" key={elem.id}>
                   <h3>{elem.data}</h3>
                   
                   <i className='far fa-trash-alt add-btn' title="delete Item" onClick={()=>dispatch(deleteTodo(elem.id)) }></i>
              </div>
              ))
          }             

          </div>
          
          <div className="showItems">
                <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>
          </div>
        </div>
    </div>
    )
}

export default Todo

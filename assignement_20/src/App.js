import './App.css';
import styled from 'styled-components';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [list,setList]=useState([
    {
      id:0,
      title:"Pizza",
      calorie:56
    },
    {
      id:1,
      title:"Burger",
      calorie:69
    },
    {
      id:2,
      title:"Coke",
      calorie:500
    },
    {
      id:3,
      title:"Browne",
      calorie:180
    },
    {
      id:4,
      title:"Fried Rice",
      calorie:90
    },
    {
      id:5,
      title:"Lassania",
      calorie:56
    },
    {
      id:6,
      title:"Pani Puri",
      calorie:10
    },
])
   

  //  const onDelete=(id)=>{
  //      console.log(id)
  //  }
  return (
    <div className="app">
        <h3>Calorie Read Only</h3>
        <Container>
           {list.map(item=>(
               <Card title={item.title} calorie={item.calorie} list={list} setList={setList} id={item.id} key={item.id}/>
           ))}
           
        </Container>

    </div>
  );
}

const Container=styled.div`
width:50vw;
height:70vh;
min-height:60vh;
border-radius:0.2rem;
overflow-y:auto;
overflow-x:hidden;
box-shadow:0px 3px 5px rgba(0,0,0);
padding-top:1rem;
padding-left:0.5rem;
padding-right:0.5rem;
padding-top:1rem;
`
export default App;

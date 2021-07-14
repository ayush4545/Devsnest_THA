
import {useState } from 'react';
import './App.css';
import { useFetch } from './useFetch';

function App() {
  const datas=useFetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
  const [data,setData]=useState(null)
  if(datas && data==null){
    console.log(datas)
    setData(datas.data.meals)
  }else{
    
    console.log("not data")
  }
  return (
    <div className="app">
           <h1>Chicken Meals</h1>
           <div className="images">
               { data && data.map((item)=>{
                  return <img src={item.strMealThumb} alt={item.strMeal} key={item.idMeal} style={{borderRadius:'0.5rem'}} />
               })}
           </div>
    </div>
  );
}

export default App;

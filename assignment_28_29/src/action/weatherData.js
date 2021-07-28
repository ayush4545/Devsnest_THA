export const loadData=(city)=>dispatch=>{
     fetch(`https://api.weatherapi.com/v1/current.json?key=f0c5f71d70c1452c837154501212707&q=${city}`)
     .then(res=>res.json())
     .then(data=>  dispatch({ type:"LOAD_DATA",payload:data}))
   
}

export const updatePlace=(city)=>{
     return {
       type: "UPDATED_CITY",
       payload:city
     }
}

export const toggleTheme=()=>{
     return{
          type:"TOGGLE_THEME"
     }
}
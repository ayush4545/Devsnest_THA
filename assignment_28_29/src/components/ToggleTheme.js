import React from 'react'
import "./ToggleTheme.css"
import {useDispatch,useSelector} from "react-redux"
import {loadData,updatePlace,toggleTheme} from "../action/weatherData"
function ToggleTheme() {
    const theme=useSelector(state=>state.theme)
    const dispatch=useDispatch()
    return (
        <div className="theme" >
            <label className="switch" >
                <input type="checkbox" onClick={()=>dispatch(toggleTheme())}/>
                <span className="slider round"></span>
            </label>
            
        </div>
    )
}

export default ToggleTheme

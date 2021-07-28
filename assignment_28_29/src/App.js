import ToggleTheme from './components/ToggleTheme';
import './App.css';
import {useDispatch,useSelector} from "react-redux"
import {loadData,updatePlace} from "./action/weatherData"
function App() {
  const dispatch=useDispatch()
  // const [city,setCity]=useState()
  const data=useSelector(state=>state.data)
  const city=useSelector(state=>state.city)
  const theme=useSelector(state=>state.theme)
  // useEffect(async()=>{
  //    const response=await fetch("https://api.weatherapi.com/v1/current.json?key=f0c5f71d70c1452c837154501212707&q=kolkata")
  //    const newData=await response.json()
  //    console.log( newData)
  //    setData(newData)
  // },[])
  const submitCity=(e)=>{
     e.preventDefault()
     dispatch(loadData(city))
  }
  return (
    <div className={theme ? 'light' :'app'}>
          <ToggleTheme />
          <div className="mainDiv">
              <div className="inputData">
                <input type="text" value={city} placeholder="Enter City Name" onChange={(e)=>dispatch(updatePlace(e.target.value))} />
                <button className="btn" onClick={submitCity}>Search</button>
              </div>

            
              {
               data.location  ? 
                <div className="card">
                 <div className="date-location">
                      <div className="location">{data.location.name}-{data.location.region} ({data.location.country})</div>
                      <div>{data.location.localtime}</div>
                 </div>
                 <div className="temp">
                   <img className="img" src={data.current.condition.icon} alt=""/>
                   <div className="temp_c">
                         {data.current.temp_c}&deg;C
                   </div>
                   <div className="text">
                      {data.current.condition.text}
                    </div>
                 </div>
                 <div className="remainingData">
                        <div className="wind">
                             <h2>Wind Now</h2>
                             <p><span>{data.current.wind_kph}</span> kph</p>
                        </div>
                        <div className="humidity">
                             <h2>Humidity</h2>
                             <p><span>{data.current.humidity}</span> %</p>
                        </div>
                        <div className="precip">
                             <h2>Precipitation</h2>
                             <p><span>{data.current.precip_in}</span> in</p>
                        </div>
                 </div>
              </div>
              :<div className="nodata">
                 <h1>No Data Found</h1>
                 </div>
              }
              
          </div>
    </div>
  );
}

export default App;

console.log('this is weather page')

const apiKey='d636883db482156273339c910ced1564'
//http://openweathermap.org/img/wn/10d@2x.png img code 
//http://api.openweathermap.org/data/2.5/weather?q='mumbai'&appid=e3a89339f361cb0fdd3fba1259bdd653'


const weather_body=document.getElementById('main');
const getDate1=(today)=>{
   let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
   let months=['January','February','March','April','May','June','July','August','September','October','November','Decemeber']

   let year=today.getFullYear()
   let month=months[today.getMonth()]
   let d=today.getDate();
   let day=days[today.getDay()];

   return`${d} ${month} (${day}), ${year}`
}
async function getData(city){
    try{
    const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    console.log(response)
    const resJson=await response.json()
    const weather=resJson.weather[0].main
    const today=new Date()
    const date=getDate1(today)
    console.log(date)
    if(weather=='Clear'){
        console.log('clear')
    document.body.style.backgroundImage='URL("clear.jpg")';
    }
    else if(resJson.weather[0].main=='Haze'){
        console.log('haze')
        document.body.style.backgroundImage='URL("haze.jpg")';
    }
    else if(resJson.weather[0].main=='Mist'){
        document.body.style.backgroundImage='URL("mist.jpg")';
    }
    else if(resJson.weather[0].main=='Thunderstrom'){
        document.body.style.backgroundImage='URL("stormy.jpg")';
    }
    else if(resJson.weather[0].main=='Rain'){
        document.body.style.backgroundImage='URL("rain.jpg")';
    }
    else if(resJson.weather[0].main=='Clouds'){
        document.body.style.backgroundImage='URL("cloud.jpg")';
    }
    else if(resJson.weather[0].main=='Snow'){
        console.log('haze')
        document.body.style.backgroundImage='URL("snow.jpg")';
    }
    else if(resJson.weather[0].main=='Scattered'){
        document.body.style.backgroundImage='URL("scattered.jpg")';
    }
    str=` <div class="weather-body" id='weather-body'>
               <div class="location-details">
                    <div class="city">${resJson.name},${resJson.sys.country}</div>
                    <div class="date">${date}</div>
                </div>
                <div class="weather-status">
                    <div class="temp" id='temp'>${Math.floor(resJson.main.temp)}&deg;C</div>
                    <div class="min-max" id='min-max'>${Math.floor(resJson.main.temp_min)}&deg;C(min) / ${Math.floor(resJson.main.temp_max)}&deg;c(max)</div>             
                    <div class='weather' id='weather'>${resJson.weather[0].main}</div>
                    <div class='img'><img src='http://openweathermap.org/img/wn/${resJson.weather[0].icon}@2x.png' alt='Image Not Required' /></div>

                </div>
            </div>`
         
    weather_body.innerHTML=str;
    }catch(e){
       alert('Please type  the correct city name')
    }

    
}

const input=document.getElementById('input-box');

input.addEventListener('keypress',(event)=>{
    if(event.keyCode==13){
    console.log(input.value)
    getData(input.value)
    }else{
        console.log('u pressed wrong key')
    }
})


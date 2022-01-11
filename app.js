let weather = {
    apiKey:"c7686ab0dff66d8e68735a9f78856cd1",
    fetchWeather:function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const {name} = data;
        const {temp,humidity} = data.main;
        const{icon,description}= data.weather[0];
        const{speed} = data.wind;
        console.log(name,temp,humidity,icon,description,speed);

        document.querySelector('.city').innerHTML = `Weather in ${name}`;
        document.querySelector('.temp').innerHTML = `${temp}°C`;
        document.querySelector('.humidity').innerHTML =`Humidity:${humidity}%`;
        document.querySelector('.description').innerHTML = description;
        document.querySelector('.speed').innerHTML = `Wind Speed:${speed}`;
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+icon+".png";
    },
    search:function(){
        this.fetchWeather(document.querySelector('input').value);
    }
};

document.querySelector('button').addEventListener('click',()=>{
    weather.search();
})
document.querySelector('input').addEventListener('keyup',(e)=>{
   if(e.key === "Enter"){
      weather.search();
    }
})
 

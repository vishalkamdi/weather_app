let loc =document .getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document .getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");



window.addEventListener("load",()=>{
    

    
let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;

            let apiKey = "31c0e36a9bce415040a830aec5c6f2aa";
        
    
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
        

            fetch(api).then((response)=>
            {
                return response.json();
            })
            .then (data=>{

                const{name}=data;
                const{feels_like}=data.main;
                const{main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-273);
            })
        })
    }


}) 


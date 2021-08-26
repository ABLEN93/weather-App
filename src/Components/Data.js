import React, { useState } from 'react'
import sun from '../assets/1.gif';
import clouds from '../assets/clouds.gif';
import rain from '../assets/rain.gif';
import SimpleMap from './Map.js';


function Data() {
    const [info, setInfo] = useState({
        city: "",
        country: ""
    });
    const [storage, setStorage] = useState([]);
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${info.city},${info.country}&units=metric&appid=9442fd74cbb33752ba35d0918a6c892b`;
    function getWheather(e) {
        e.preventDefault();
        if (info.city !== "" && info.country !== "") {
            fetch(Url)
                .then((result) => result.json())
                .then((data) => setStorage([data], console.log("working", storage)))
        } else {
            alert("fill out this one")
        }
    } console.log(storage);
    // let ApiKey = "9442fd74cbb33752ba35d0918a6c892b";
    return (
        <div class="main-box">
            <form onSubmit={(e) => getWheather(e)}>
                <input onChange={(e) => setInfo({ ...info, city: e.target.value })} type="text" placeholder="city" />
                <input onChange={(e) => setInfo({ ...info, country: e.target.value })} type="text" placeholder="country" />
                <button>get Wheather</button>
            </form>
            <div class="info">
                {storage.map((data, index) => <div key={index + 1}>
                    <h1 class="card-body">City name: {data.name}</h1>
                    <p class="card-body">Weather main: {data.weather[0].main}
                        {data.weather[0].main === "Clouds" ? <img src={clouds} style={{ marginLeft: "20px", borderRadius: "55%" }} width='100' /> : null}

                        {/* .toLowerCase().indexOf("clouds") > -1 */}
                        {/* that over if u wanna write if weather main has word clouds */}
                        
                        {data.weather[0].main === "rain" ? <img src={rain} style={{ marginLeft: "20px", borderRadius: "55%" }} width='100' /> : null}
                        {data.weather[0].main === "sun" || data.weather[0].main === "clear" ? <img style={{ marginLeft: "20px", borderRadius: "55%" }} src={sun} width='50' /> : null}</p>
                    <p class="card-body">Weather description: {data.weather[0].description}

                    </p>
                    <p class="card-body">Temperature:{Math.floor(Math.round(data.main.temp))}°c
                    </p>
                    <p class="card-body">Timezone: {data.timezone}</p>
                    <p class="card-body">Visibility: {data.visibility}</p>
                </div>
                )}
                </div>
                <SimpleMap data={storage} />
            </div>
        
    )
}
export default Data;

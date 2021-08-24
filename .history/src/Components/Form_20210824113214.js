import React, { useState } from 'react';

const Form = (props) => {
    const [info, setInfo] = useState({
        city: "",
        country: ""
    });
    const [data, setData] = useState([])

    function getWheather(e) {
        e.preventDefault();
        const Url = `https://api.openweathermap.org/data/2.5/weather?q=${info.city},${info.country}&appid=9442fd74cbb33752ba35d0918a6c892b`;
        fetch(Url)
            .then(response => response.json())
            .then(data => setData([...data, data], console.log(data)));

    }
    return (
        <div>
            <form onSubmit={getWheather}>
                <input value={info.city} onChange={(e) => setInfo({ ...info, city: e.target.value })} type="text" placeholder="city" />
                <input value={info.country} onChange={(e) => setInfo({ ...info, country: e.target.value })} type="text" placeholder="country" />
                <button type="submit">Get Wheather</button>
            </form>
            <div>
                {data.map(result => <div>
                    <p>City: {result.name}</p>
                    <p>Description: {result.weather[0].description}</p>
                    <p>Status: {result.weather[0].main}</p>
                    <p>Coordinations: {result.weather[0].coord}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Form;

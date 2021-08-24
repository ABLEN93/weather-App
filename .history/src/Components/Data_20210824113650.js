import React,{useState} from 'react'

function Data() {

    const [info, setInfo] = useState({
        city: "",
        country:""
    });
    const [storage, setStorage] = useState([]);

    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${info.city},${info.country}&appid=9442fd74cbb33752ba35d0918a6c892b`;

    function getWheather(e) {
        e.preventDefault();
        if(info.city!==""&&info.country!==""){fetch(Url)
            .then((result) => result.json())
            .then((data)=>setStorage([...data],console.log("working",storage)))
        } else {
            alert("fill out this one")
        }
        
    }
    return (
        <div>
            <form onSubmit={(e)=>getWheather(e)}>
                <input onChange={(e)=> setInfo({...info,city:e.target.value})} type="text" placeholder="city" />
                <input onChange={(e)=> setInfo({...info,country:e.target.value})} type="text" placeholder="country"/>
                <button>get Wheather</button>
            </form>
            <div>
                {storage.map((data, index) => <div key={index + 1}>
                    <h1>{data.name}</h1>
                    <p>{data.weather[0].main}</p>
                    <p>{}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Data

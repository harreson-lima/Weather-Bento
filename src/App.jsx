/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun } from '@fortawesome/free-solid-svg-icons'

import MainBox from './components/MainBox';

function App() {
  
  const [data, setData] = useState({});
  const [location, setLocation] = useState("rio de janeiro");
  
  // const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  const api_key = "4a84acaf481f1d9ea2f93508c9f77572";

  useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  // api.openweathermap.org/data/2.5/forecast?lat=-24.7911&lon=-50.0119&appid=4a84acaf481f1d9ea2f93508c9f77572

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const searchData = await response.json();
    setData(searchData);
    setLocation("");
  };


  return (
    <div className='app'>

      <div className="bento">

        {/* <div className="bento__box main_box flex">
          <h1 className="city_name">{data.name}</h1>
          <img className='icon' src={clearImg} />
          <div className="weather">
            {data.weather && data.weather[0].main}
            {data.main && ` ${Math.floor(data.main.temp)}°`}
          </div>
          <div className="weather_details flex">
            Min: {data.main && ` ${Math.floor(data.main.temp_min)}°`} | 
            Max: {data.main && ` ${Math.floor(data.main.temp_max)}°`}
            <span className="realfeel">
              RealFeel: {data.main && ` ${Math.floor(data.main.feels_like)}°`}
            </span>
          </div>
        </div> */}
        <MainBox data={data}/>

        <div className="bento__box"></div>
        <div className="bento__box"></div>
        <div className="bento__box"></div>
        <div className="bento__box"></div>
        <div className="bento__box column_span--2"></div>
        <div className="bento__box column_span--3"></div>
      </div>
    </div>
  )
}

export default App


/*
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Castro");

  const api_key = "4a84acaf481f1d9ea2f93508c9f77572";

  useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const searchData = await response.json();
    setData(searchData);
    setLocation("");
  };

*/
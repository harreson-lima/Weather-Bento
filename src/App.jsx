/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWind, faDroplet, faGauge, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import MainBox from './components/MainBox';

function App() {
  
  const [data, setData] = useState({});
  const [location, setLocation] = useState('Thredbo');

  const api_key = '4a84acaf481f1d9ea2f93508c9f77572';

  useEffect(() => {
    search();
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  // api.openweathermap.org/data/2.5/forecast?lat=-24.7911&lon=-50.0119&appid=4a84acaf481f1d9ea2f93508c9f77572

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`;

    fetch(url)
    .then(response => {
      if (!response.ok) {
        if (location === '') {
          toast('Please enter the name of a city!');
        } else {
          toast('Place not found!');
        }
        throw new Error('Error in request');
      }
      return response.json();
    })
    .then(data => setData(data))
    .catch(error => {
      console.error('An error occurred:', error);
    });
    setLocation('');
  };

  const convertTime = (unixTimestamp, timezoneOffset) => {
    const date = new Date((unixTimestamp + timezoneOffset) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }


  return (
    <div className='app'>
      <ToastContainer
         position="top-right"
            autoClose= {2000}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            progress={undefined}
            theme= "light"
      />
      <div className='search flex'>
        <input 
          type='text'
          placeholder='Enter location'
          value={location}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className='flex' onClick={search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className='bento'>
        <MainBox data={data}/>

        <div className='bento__box simple_box  flex' title='Wind'>
          <FontAwesomeIcon icon={faWind}/>
          <span>{data.wind && data.wind.speed}Km/h</span>
        </div>
        <div className='bento__box simple_box flex' title='Humidity'>
          <FontAwesomeIcon icon={faDroplet}/>
          <span>{data.main && data.main.humidity}%</span>
        </div>
        <div className='bento__box simple_box flex' title='Pressure'>
          <FontAwesomeIcon icon={faGauge}/>
          <span>{data.main && data.main.pressure}hPa</span>
        </div>
        <div className='bento__box simple_box flex' title='Sunrise/Sunset'>
          <div className='flex time'>
            <FontAwesomeIcon icon={faSun}/>
            <span>{data.sys && convertTime(data.sys.sunrise,data.timezone)}</span>
          </div>
          <div className='flex time'>
            <FontAwesomeIcon icon={faMoon}/>
            <span>{data.sys && convertTime(data.sys.sunset,data.timezone)}</span>
          </div>
        </div>
        <div className='bento__box column_span--2'></div>
        <div className='bento__box column_span--3'></div>
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
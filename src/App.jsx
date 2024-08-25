/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faMagnifyingGlass, faWind, faDroplet, faGauge, faSun, faMoon, faCloudRain } from '@fortawesome/free-solid-svg-icons';

import MainBox from './components/MainBox';
import SearchField from './components/SearchField';
import BentoBox from './components/BentoBox';
import WideBox from './components/WideBox';
import WiderBox from './components/WiderBox';

function App() {
  
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState('São Paulo');

  const api_key = '4a84acaf481f1d9ea2f93508c9f77572';

  useEffect(() => {
    search();
  }, []);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

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
    .then(data => {
      setData(data)
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=Metric&appid=${api_key}`;
      fetch(forecastUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error in request');
        }
        return response.json();
      })
      .then(data => setForecast(data))
      .catch(error => {
        console.error('An error occurred:', error);
    });
    })
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
      <SearchField 
        icon={faMagnifyingGlass} 
        handleInputChange={handleInputChange} 
        handleKeyDown={handleKeyDown} 
        search={search} 
        value={location}
      />
      <div className='bento'>
        <MainBox data={data}/>
        <BentoBox 
          data={data.wind && data.wind.speed}
          info='Km/h'
          title='Wind'
          icon={faWind}
        />
        <BentoBox 
          data={data.main && data.main.humidity}
          info='%'
          title='Humidity'
          icon={faDroplet}
        />
        <BentoBox 
          data={data.main && data.main.pressure}
          info='hPa'
          title='Pressure'
          icon={faGauge}
        />
        <BentoBox 
          data={forecast.list && forecast.list[0].pop}
          info='%'
          title='Rain probability'
          icon={faCloudRain}
        />
        <WideBox 
        data={[
          data.sys && convertTime(data.sys.sunrise,data.timezone),
          data.sys && convertTime(data.sys.sunset,data.timezone)
        ]}
        icons={[faSun,faMoon]}
        />
        <WiderBox
          data={forecast.list && forecast.list}
        />
      </div>
    </div>
  )
}

export default App;
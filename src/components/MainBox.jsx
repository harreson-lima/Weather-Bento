/* eslint-disable react/prop-types */
import sun from '../assets/sun.svg';
import moon  from '../assets/moon.svg';
import cloud_sun  from '../assets/cloud_sun.svg';
import cloud_moon  from '../assets/cloud_moon.svg';
import clouds  from '../assets/clouds.svg';
import rain  from '../assets/rain.svg';
import storm  from '../assets/storm.svg';
import snow  from '../assets/snow.svg';
import fog  from '../assets/fog.svg';

function MainBox({data}) {
  const hours = new Date().getHours();
  const time = (hours >= 18 || hours <= 5) ? 'night':'day';

  const weatherImages = {
    Clear: time === 'day' ? sun:moon,
    Clouds: (data.weather && data.weather[0].description === 'few clouds') ? 
    (time === 'day' ? cloud_sun:cloud_moon) : clouds,
    Thunderstorm: storm,
    Rain: rain,
    Drizzle: rain,
    Snow: snow,
    Haze: fog,
    Mist: fog,
    Fog: fog,
    Smoke: fog,
    Dust: fog,
    Sand: fog,
    Ash: fog,
    Squall: fog,
    Tornado: fog,
  };

  const weatherImage = data.weather ? weatherImages[data.weather[0].main]:null;

  return (
    <div className="bento__box main_box flex">
          <h1 className="city_name">{data.name}</h1>
          <img className='icon' src={weatherImage} />
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
        </div>
  )
}

export default MainBox
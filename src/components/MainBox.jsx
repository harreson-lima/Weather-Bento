/* eslint-disable react/prop-types */
import clearImg  from '../assets/110801_sun_icon.svg'

function MainBox({data}) {
  return (
    <div className="bento__box main_box flex">
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
        </div>
  )
}

export default MainBox
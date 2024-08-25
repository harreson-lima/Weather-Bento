/* eslint-disable react/prop-types */


function WiderBox({data}) {
  return (
    <div className='bento__box column_span--3 flex'>
      <div className="day flex">
        <span className="day__date">
          Day {data && data[1].dt_txt.split(' ')[0].split('-')[2]}
        </span>
        <div className="day__temp">
          {data && Math.floor(data[1].main.temp)}°
        </div>
      </div>
      <div className="day flex">
        <span className="day__date">
          Day {data && data[9].dt_txt.split(' ')[0].split('-')[2]}
        </span>
        <div className="day__temp">
          {data && Math.floor(data[9].main.temp)}°
        </div>
      </div>
      <div className="day flex">
        <span className="day__date">
          Day {data && data[17].dt_txt.split(' ')[0].split('-')[2]}
        </span>
        <div className="day__temp">
          {data && Math.floor(data[17].main.temp)}°
        </div>
      </div>
      <div className="day flex">
        <span className="day__date">
          Day {data && data[25].dt_txt.split(' ')[0].split('-')[2]}
        </span>
        <div className="day__temp">
          {data && Math.floor(data[25].main.temp)}°
        </div>
      </div>
      <div className="day flex">
        <span className="day__date">
          Day {data && data[33].dt_txt.split(' ')[0].split('-')[2]}
        </span>
        <div className="day__temp">
          {data && Math.floor(data[33].main.temp)}°
        </div>
      </div>
    </div>
  )
}

export default WiderBox
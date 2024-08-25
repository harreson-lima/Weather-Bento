/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WideBox({data,icons}) {
  return (
    <div className='bento__box simple_box column_span--2 flex' title='Sunrise/Sunset'>
      <div className='flex time'>
        <FontAwesomeIcon icon={icons[0]}/>
        <span>{data[0]}</span>
      </div>
      <div className='flex time'>
        <FontAwesomeIcon icon={icons[1]}/>
        <span>{data[1]}</span>
      </div>
    </div>
  )
}

export default WideBox
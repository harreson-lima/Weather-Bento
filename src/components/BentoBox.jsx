/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BentoBox({data, info, title, icon}) {
  return (
    <div className='bento__box simple_box  flex' title={title}>
      <FontAwesomeIcon icon={icon}/>
      <span>{data}{info}</span>
    </div>
  )
}

export default BentoBox
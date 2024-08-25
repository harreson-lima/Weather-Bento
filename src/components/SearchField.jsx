/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchField({handleInputChange, handleKeyDown, search, value, icon}) {
  return (
    <div className='search flex'>
      <input 
        type='text'
        placeholder='Enter location'
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className='flex' onClick={search}>
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  )
}

export default SearchField
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function DatesSelected(props) {
  return (
      <div className='dates-selected-wrapper'>
    <div className="dates-selected">
    <div className='start-date-wrapper'> 
        <div className='start-date'> 
            <span className='day'>Tuesday</span>
            <div className='date'>
                <span>14</span>
                <span>Jun</span>
                <span>2022</span>
            </div>
        </div>
        </div>
        <div className='end-date'>
            <span className='day'>Friday</span>
            <div className='date'>
                <span>14</span>
                <span>Jun</span>
                <span>2022</span>
            </div>
        </div>
        
    </div>
    <div className='edit-wrapper'>
    <FontAwesomeIcon className='edit-icon' icon={regular('pen-to-square')} />
    </div>
    </div>
  );
}

export default DatesSelected
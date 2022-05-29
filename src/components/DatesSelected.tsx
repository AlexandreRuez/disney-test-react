import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { useAppSelector } from "../utils/hooks"

function DatesSelected(props) {
    const data = useAppSelector(state => state.hotel);
    const locale = 'fr-FR';
    function formatDate(date) {
        return (
            <div>
                <span className='day'>{date.toLocaleDateString(locale, { weekday: 'long' })}</span>
                <div className='date'>
                    <span> {date.getDate()}</span>
                    <span> {date.toLocaleString(locale, {month: 'short'})}</span>
                    <span> {date.getFullYear()}</span>
                </div>
            </div>
        );
        
    }
  return (
    <div className='dates-selected-wrapper'>
    <div className="dates-selected">
    <div className='start-date-wrapper'> 
        <div className='start-date'> 
            {formatDate(data.startDate)}
        </div>
        </div>
        <div className='end-date'>
            {formatDate(data.endDate)}
        </div>
        
    </div>
    <div className='edit-wrapper'>
    <FontAwesomeIcon className='edit-icon' icon={regular('pen-to-square')} />
    </div>
    </div>
  );
}

export default DatesSelected
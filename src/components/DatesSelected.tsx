import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useAppSelector } from "../utils/hooks"

function DatesSelected(props) {
    const data = useAppSelector(state => state.order);
    const locale = 'fr-FR';
    function formatDate(date) {
        return (
            <div>
                <span className='day'>{date.toLocaleDateString(locale, { weekday: 'long' })}</span>
                <div className='date'>
                    <span> {date.toLocaleString(locale, {day: '2-digit'})}</span>
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
            {formatDate(data.dates.start)}
        </div>
        </div>
        <div className='end-date'>
            {formatDate(data.dates.end)}
        </div>
        
    </div>
    <Link to="/">
        <div className='edit-wrapper'>
            <FontAwesomeIcon className='edit-icon' icon={regular('pen-to-square')} />
        </div>
    </Link>
    </div>
  );
}

export default DatesSelected
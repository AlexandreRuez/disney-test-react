import React, {useState} from 'react';
import CalendarInput from '../CalendarInput'
import ErrorNotification from '../ErrorNotification'
import * as orderActions from "../../utils/reducers/order";
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

// Gestion des erreurs de dates à terminer

function SearchSection() {
    const [isActive , setActive] = useState(false);
    const [startDateError , setstartDateError] = useState(false);
    const [endDateError , setendDateError] = useState(false);
    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.order);

    function updateDate(type,date) {
        dispatch(orderActions.unsetDateError())
        type === "start" ? dispatch(orderActions.setStartDate(date)) : dispatch(orderActions.setEndDate(date))
    }

    return (
        <div className="search-card-container">
            <div className='search-card-header' onClick={() => setActive(!isActive)}>
                <h2>
                    Your search
                </h2>
                <div className='collapse-btn'>
                    <span>show { isActive ? 'less' : 'more'}</span>
                    <FontAwesomeIcon className={`edit-icon ${isActive && 'reverse'}` } icon={solid('chevron-down')} />
                </div>
            </div>
            <div className={`search-card-content ${!isActive && "searchCollapse"}`}>
                <div className="input-dates-wrapper">
                    <CalendarInput dateError={startDateError} label="Arrival date" data={data.dates.start} updateDate={(date) => updateDate("start", date)}/>
                    <CalendarInput dateError={endDateError} label="Departure date" data={data.dates.end} updateDate={(date) => updateDate("end", date)}/>
                </div>
                <p>Enjoy an even more comfortable stay by adding a second room to your search! <br></br>
                Booking for more than 12 people? Booking more than 2 rooms? Please <a href='#'>contact us.</a></p>
                {data.dates.error && <ErrorNotification/>} 
            </div>
            
        </div>
    )
}

export default SearchSection;
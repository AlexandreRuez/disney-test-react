import React, {useState, useEffect} from 'react';
import CalendarInput from '../CalendarInput'
import ErrorNotification from '../ErrorNotification'
import * as orderActions from "../../utils/reducers/order";
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function SearchSection() {
    const [isActive , setActive] = useState(false);
    const [startDateLimit , setStartDateLimit] = useState(new Date());
    const [endDateLimit , setEndDateLimit] = useState();

    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.order);

    useEffect(() => {
        if (data.dates.start != null && data.dates.end != null) {
            if (data.dates.start>data.dates.end ) {
                dispatch(orderActions.setEndDate(null)) 
            }
            dispatch(orderActions.unsetDateError())
            dispatch(orderActions.unlockOptionGuard())
        }
    }, [data.dates]);

    function updateDate(type,date) {
        type === "start" ? dispatch(orderActions.setStartDate(date)) &&  setEndDateLimit(date) : dispatch(orderActions.setEndDate(date))
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
            <div className={`search-card-content ${!isActive && !data.dates.error ? "searchCollapse" : ""}`}>
                <div className="input-dates-wrapper">
                    <CalendarInput startDateLimit={startDateLimit} dateError={data.dates.error} label="Arrival date" data={data.dates.start} updateDate={(date) => updateDate("start", date)}/>
                    <CalendarInput startDateLimit={endDateLimit} dateError={data.dates.error} label="Departure date" data={data.dates.end} updateDate={(date) => updateDate("end", date)}/>
                </div>
                <p>Enjoy an even more comfortable stay by adding a second room to your search! <br></br>
                Booking for more than 12 people? Booking more than 2 rooms? Please <a href='https://www.disneylandparis.com/en-gb/my-disneyland/contact-us/'>contact us.</a></p>
                {data.dates.error ? <ErrorNotification/> : ""} 
            </div>
            
        </div>
    )
}

export default SearchSection;
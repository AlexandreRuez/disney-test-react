import React, {useState} from 'react';
import CalendarInput from './CalendarInput'
import * as hotelActions from "../utils/reducers/hotel";
import { useAppDispatch, useAppSelector } from "../utils/hooks"

function SearchSection() {
        const [isActive , setActive] = useState(false);
        const dispatch = useAppDispatch();
        const data = useAppSelector(state => state.hotel);
        function updateDate(type,date) {
            type === "start" ? dispatch(hotelActions.setStartDate(date)) : dispatch(hotelActions.setEndDate(date))
          }
    return (
        <div className="search-card-container">
            <div className='search-card-header' onClick={() => setActive(!isActive)}>
                <h2>
                    Your search
                </h2>
                <div className='collapse-btn'>
                    <span>show less</span>
                </div>
            </div>
            <div className={`search-card-content ${isActive ? "": "searchCollapse"}`}>
                <div className="input-dates-wrapper">
                    <CalendarInput label="Arrival date" data={data.startDate} updateDate={(date) => updateDate("start", date)}/>
                    <CalendarInput label="Departure date" data={data.endDate} updateDate={(date) => updateDate("end", date)}/>
                </div>
                <p>Enjoy an even more comfortable stay by adding a second room to your search! <br></br>
                Booking for more than 12 people? Booking more than 2 rooms? Please <a href='#'>contact us.</a></p>
            </div>
        </div>
    )
}

export default SearchSection;
import React from 'react';
import CalendarInput from './CalendarInput'
import * as hotelActions from "../utils/reducers/hotel";
import { useDispatch, useSelector } from "react-redux"

function SearchSection() {

        
        const dispatch = useDispatch();
        const data = useSelector(state =>
          state.hotel
        )
        function updateDate(type,date) {
            type === "start" ? dispatch(hotelActions.setDate({startDate:date, endDate : data.endDate})) : dispatch(hotelActions.setDate({startDate:data.startDate, endDate : date}))
          }
    return (
        <div className="search-card-container">
            <h2>
                Your search
            </h2>
            <div className='input-dates-wrapper'>
                <CalendarInput data={data.startDate} updateDate={(date) => updateDate("start", date)}/>
                <CalendarInput data={data.endDate} updateDate={(date) => updateDate("end", date)}/>
            </div>
        </div>
    )
}

export default SearchSection;
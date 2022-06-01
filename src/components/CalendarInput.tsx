import React, { useState, useEffect } from 'react';
import DatePicker  from 'react-date-picker';
import '../assets/styles/calendar.css'
import 'react-calendar/dist/Calendar.css';

function CalendarInput(props) {
  const [inputDate, setInputDate] = useState(props.data);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    setInputDate(props.data)
  }, [props.data]);
  return (
    <div>
      <div className={`calendar-input-wrapper  ${props.dateError && inputDate==null? "dateError": ""} ${isActive ? "calendarActive": ""}`}>
          <label>{props.label}</label>
          <DatePicker 
            format="dd/ MM/y" 
            dayPlaceholder="dd" 
            monthPlaceholder="mm" 
            yearPlaceholder="yyyy" 
            clearIcon={null} 
            onCalendarOpen={() => setActive(!isActive)} 
            onCalendarClose={() => setActive(!isActive)} 
            onChange={(e) => {setInputDate(e);props.updateDate(e);}} 
            value={inputDate} 
            minDate={props.startDateLimit}
            maxDate={props.endDateLimit}
          />
      </div>
    </div>
  );
}

export default CalendarInput
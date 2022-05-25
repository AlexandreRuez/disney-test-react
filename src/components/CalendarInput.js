import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarInput(props) {
  const [inputDate, setInputDate] = useState();
  const locale = 'fr-FR'; 
  
  function formatDate(date) {
    var dateformated = new Intl.DateTimeFormat(
      locale, 
      {
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
      }).format(date)
    //console.log(dateformated);
    return dateformated;
  }

  return (
    <div>
      <div className='calendar-input-wrapper'>
        <input className='select-dates-input' readOnly type="text" value={props.data}></input>
        <Calendar onChange={(e) => {setInputDate(e);props.updateDate(formatDate(e));}} value={inputDate} />
      </div>
    </div>
  );
}

export default CalendarInput
import React, { useState } from 'react';
import DatePicker  from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';

function CalendarInput(props) {
  const [inputDate, setInputDate] = useState();
  const [isActive , setActive] = useState(false);
  const locale = 'fr-FR';
  function formatDate(date) {
    var dateformated = new Intl.DateTimeFormat(
      locale, 
      {
        year: "numeric", 
        month: "2-digit", 
        day: "2-digit"
      }).format(date)
    return dateformated;
  }

  return (
    <div>
      <div className={`calendar-input-wrapper ${isActive ? "calendarActive": ""}`}>
          <label>{props.label}</label>
          <DatePicker dayPlaceholder="dd" monthPlaceholder="mm" yearPlaceholder="yyyy" clearIcon={null} onCalendarOpen={() => setActive(!isActive)} onCalendarClose={() => setActive(!isActive)} onChange={(e) => {setInputDate(e);props.updateDate(formatDate(e));}} value={inputDate} />
      </div>
    </div>
  );
}

export default CalendarInput
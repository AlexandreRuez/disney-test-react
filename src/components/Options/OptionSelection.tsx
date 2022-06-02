import React from 'react';

function OptionSelection(props) {
  return (
    <div className="option-selection">
        <label className='checkbox-input-container'>
            <input type="checkbox" checked={props.checked} className="checkbox-input" value="" onChange={(event) => props.selectOption(event,{ idEvent: props.idEvent, idOption: props.option.id, date: props.date, startTime: props.option.startTime, price: props.option.price })}/>
            <span className="checkmark"></span>
        </label>
        <div className="option-selection-infos">
            <p className='details'>{props.option.title} - {props.option.startTime}</p>
            <p className='date'>{props.date}</p>
        </div>
        <p className='price'>£{props.option.price}</p>
    </div>
  );
}

export default OptionSelection
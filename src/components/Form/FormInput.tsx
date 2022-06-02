import React, {useState} from 'react';

function FormInput(props) {
    const [inputValue, setinputValue] = useState<string>(props.inputValue);
    const [labelFocus, setLabelFocus] = useState<boolean>(false);
    return (
        <div className={`form-input ${props.fullwidth ? "fullwidth" : ""}  ${props.error ? "error" : ""}`}>
            <label className={labelFocus ? "focused" : ""}>{props.label}</label>
            <input 
                maxLength={props.maxLength}
                onBlur={() => {setLabelFocus(false)}} 
                onFocus={() => {setLabelFocus(true)}} 
                onChange={(e) => {setinputValue(e.target.value); 
                props.updateUser({ [props.targetValue] : e.target.value})}} 
                value={inputValue}
            />
            {props.error && <p className='description'>Please complete missing information (in the required fields)</p>}
        </div>
    );
}

export default FormInput
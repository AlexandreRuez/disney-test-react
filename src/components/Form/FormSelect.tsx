import React, {useState} from 'react';

function FormSelect(props) {
    const [inputValue, setinputValue] = useState<string>(props.inputValue);
    const [labelFocus, setLabelFocus] = useState<boolean>(false);
    return (
        <div className="form-input">
            <label className={labelFocus ? "focused" : ""}>{props.label}</label>
            <select 
                onBlur={() => {setLabelFocus(false)}} 
                onFocus={() => {setLabelFocus(true)}} 
                onChange={(e) => {setinputValue(e.target.value); 
                props.updateUser({ [props.targetValue] : e.target.value})}} 
                value={inputValue}
            >
                {props.options.map((service,i) => (
                    <option key={i} value={service}>
                        {service}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FormSelect
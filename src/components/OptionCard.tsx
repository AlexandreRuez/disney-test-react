import React from 'react';
import MainButton from "./MainButton"

function OptionCard(props) {
  return (
    <div className="option-card">
        <div className='option-image-container'>
            <img src={props.option.image} alt={props.option.title}></img>
        </div>
        <div className='option-card-content'>
       <h4>{props.option.title}</h4>
       <p>{props.option.description}</p>
       </div>
       <MainButton style="outline" value="Discover" arrowActive={false}/>
    </div>
  );
}

export default OptionCard
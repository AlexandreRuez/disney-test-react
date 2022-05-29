import React from 'react';
import "../assets/styles/popupModal.css"
import MainButton from "./MainButton"

function PopupModal(props) {
  return (
    <div className="popup-modal-mask" onClick={() => props.close()}>
        <div className='popup-modal' onClick={(e) => {e.stopPropagation()}}>
            <div className='popup-modal-content'>
                <h1 className='colored'>{props.option.title}</h1>
                <p className='description'>{props.option.description}</p>
                <div className='popup-modal-description'>
                    <p>{props.option.detailedDescription}</p>
                    <div className='separator'></div>
                    <h6>ADDITIONAL INFORMATION</h6>
                    <p className='description'>Some experiences shows or events may not be available or may be modified depending on the evolution of the safety and sanitary measures and recommendations from public authorities.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PopupModal
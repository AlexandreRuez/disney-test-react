import React, {useState} from 'react';
import MainButton from "../MainButton"
import PopupModal from './PopupModal';

function OptionCard(props) {
  const [openModal , setopenModal] = useState(false);
  function closeModal() {
    setopenModal(false)
  }
  return (
    <div className="option-card">
        <div className='option-image-container'>
            <img src={props.option.image} alt={props.option.title}></img>
        </div>
        <div className='option-card-content'>
       <h4>{props.option.title}</h4>
       <p className='description'>{props.option.description}</p>
       </div>
       <div onClick={(e) => {e.stopPropagation();setopenModal(!openModal);}}>
          <MainButton outlineStyle={true} value="Discover" fullwidth={false} arrowActive={false}/>
       </div>
       {openModal && <PopupModal close={() => {closeModal()}} option={props.option}/>}
    </div>
  );
}

export default OptionCard
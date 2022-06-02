import React, {useState} from 'react';
import MainButton from "../MainButton"
import PopupModal from './PopupModal';
import * as orderActions from "../../utils/reducers/order";
import { useAppDispatch, useAppSelector } from "../../utils/hooks"



function OptionCard(props) {
  const [openModal , setopenModal] = useState(false);
  const optionsSelected = useAppSelector(state => state.order.optionsSelected).filter(option => option.idOption == props.option.id);
  const otherOptions = useAppSelector(state => state.order.optionsSelected).filter(option => option.idOption != props.option.id);
  const dispatch = useAppDispatch();
  function closeModal() {
    setopenModal(false)
  }
  function deleteOptions() {
    dispatch(orderActions.setOptions([...otherOptions]));
  }
  function optionsSum(options) {
    return options.reduce((a, b) => a + (b.price || 0), 0);
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
       { optionsSelected.length==0 &&
        <div onClick={(e) => {e.stopPropagation();setopenModal(!openModal);}}>
            <MainButton outlineStyle={true} value="Discover" fullwidth={false} arrowActive={false} icon={false}/>
        </div>
      }
      { optionsSelected.length>0 &&
        <div className='total-options-price'>
          <p className='total-options-price-text'>Price of selected option:</p>
          <p className='price'>£{optionsSum(optionsSelected)}</p>
          <div onClick={(e) => {e.stopPropagation();setopenModal(!openModal);}}>
              <MainButton outlineStyle={false} value="Update" fullwidth={false} arrowActive={false} icon={false}/>
          </div>
          <div onClick={(e) => {e.stopPropagation();deleteOptions();}}>
              <MainButton outlineStyle={true} value="Delete" fullwidth={false} arrowActive={false} icon={true}/>
          </div>
        </div>
      }
       {openModal && <PopupModal close={() => {closeModal()}} option={props.option}/>}
    </div>
  );
}

export default OptionCard
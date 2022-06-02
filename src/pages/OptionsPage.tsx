import React from 'react';
import optionsData from "../data/options.json"
import "../assets/styles/optionsPage.css"
import OptionCategorySection from "../components/Options/OptionCategorySection"
import SideCart from "../components/SideCart"
import * as orderActions from "../utils/reducers/order";
import { useAppDispatch } from "../utils/hooks"
import { useNavigate } from "react-router-dom";


function OptionsPage (props) {
    const options:Array<Option> = optionsData;
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    
    function navigateTo() {
        dispatch(orderActions.unlockFormGuard());
        navigate('/form');
    }
    return  (
    <div className='options-page'>
        <div className="options-section">
            <h1 className='colored'>Customise your Disneyland Adventure</h1>
            <p className='subtitle'>Create a personalised and unforgettable stay with these additional extras</p>
            <h2>Travel to Disneyland Paris hassle-free!</h2>
            <OptionCategorySection options={options} />
        </div>
        <SideCart navigateFunction={() => navigateTo()}  btnValue="Next" btnArrowActive={true}/>
    </div>
    );
  }
  
  export default OptionsPage;
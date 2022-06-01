import React, {useEffect} from 'react';
import optionsData from "../data/options.json"
import "../assets/styles/optionsPage.css"
import OptionCategorySection from "../components/Options/OptionCategorySection"
import SideCart from "../components/SideCart"
import * as orderActions from "../utils/reducers/order";
import { useAppDispatch } from "../utils/hooks"


function OptionsPage (props) {
    const options:Array<Option> = optionsData;
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(orderActions.unlockFormGuard());
    }, []); 
    
    return  (
    <div className='options-page'>
        <div className="options-section">
            <h1 className='colored'>Customise your Disneyland Adventure</h1>
            <p className='subtitle'>Create a personalised and unforgettable stay with these additional extras</p>
            <h2>Travel to Disneyland Paris hassle-free!</h2>
            <OptionCategorySection options={options} />
        </div>
        <SideCart route="form"/>
    </div>
    );
  }
  
  export default OptionsPage;
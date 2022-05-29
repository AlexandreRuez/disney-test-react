import React from 'react';
import optionsData from "../data/options.json"
import "../assets/styles/optionsPage.css"
import OptionCategorySection from "../components/OptionCategorySection"
import SideCart from "../components/SideCart"

type OptionsPageState = {
    options?: Option[];
  };

class OptionsPage extends React.Component<OptionsPageState> {
    state: OptionsPageState = {
        options : optionsData,
    }
    render() {
        return  (
        <div className='options-page'>
            <div className="options-section">
                <h1 className='colored'>Customise your Disneyland Adventure</h1>
                <p className='subtitle'>Create a personalised and unforgettable stay with these additional extras</p>
                <h2>Travel to Disneyland Paris hassle-free!</h2>
                <OptionCategorySection options={this.state.options} />
            </div>
            <SideCart/>
        </div>
        );
    }
  }
  
  export default OptionsPage;
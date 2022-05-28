import React from 'react';
import MainButton from "./MainButton"
import DatesSelected from "./DatesSelected"
import StarsRanking from "./StarsRanking"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { ReactComponent as CartIcon } from '../assets/images/cartIcon.svg'
import { ReactComponent as AdultIcon } from '../assets/images/adultIcon.svg'
import { ReactComponent as ChildIcon } from '../assets/images/childIcon.svg'
import { ReactComponent as BabyIcon } from '../assets/images/babyIcon.svg'
import { ReactComponent as HotelParkTicketIcon } from '../assets/images/hotelParkTicketIcon.svg'

function SideCart(props) {
  return (
        <div className='cart'>
            <h4>YOUR SELECTION</h4>
            <div className='cart-content'>
                <div className='cart-icon-wrapper'>
                    <CartIcon/>
                </div>
                <div className='cart-info-wrapper'>
                    <DatesSelected/>
                    <div className='guest-wrapper'>
                       <div className='guest-infos'><AdultIcon/><span>x 2</span></div>
                       <div className='guest-infos'><ChildIcon/><span>x 0</span></div>
                       <div className='guest-infos'><BabyIcon/><span>x 0</span></div> 
                    </div>
                    <div className='hotel-park-ticket-icon'>
                        <HotelParkTicketIcon/>
                        <h3>Hotel + parks tickets</h3>
                        <button>
                            <FontAwesomeIcon className='edit-icon' icon={regular('pen-to-square')} />
                        </button>
                        <button>
                            <FontAwesomeIcon className='edit-icon' icon={regular('trash-can')} />
                        </button>
                    </div>
                    <div className='cart-hotel-info'>
                        <StarsRanking ranking={3} />
                    </div>
                </div>
                <MainButton style="" value="Next" arrowActive={true}/>
            </div>
        </div>
  );
}

export default SideCart
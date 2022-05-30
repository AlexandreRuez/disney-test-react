import React from 'react';
import MainButton from "./MainButton"
import DatesSelected from "./DatesSelected"
import StarsRanking from "./StarsRanking"
import { useAppSelector } from "../utils/hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { ReactComponent as CartIcon } from '../assets/images/cartIcon.svg'
import { ReactComponent as AdultIcon } from '../assets/images/adultIcon.svg'
import { ReactComponent as ChildIcon } from '../assets/images/childIcon.svg'
import { ReactComponent as BabyIcon } from '../assets/images/babyIcon.svg'
import { ReactComponent as HotelParkTicketIcon } from '../assets/images/hotelParkTicketIcon.svg'

function SideCart(props) {
const data = useAppSelector(state => state.order);
const oneDay = 1000 * 60 * 60 * 24;
const nbNights = Math.round((data.dates.end.getTime() - data.dates.start.getTime()) / oneDay);
const nbDays = nbNights + 1;
const amount = nbDays * 100 + nbNights * data.hotelSelected.price;
  return (
        <div className='cart'>
            <span className='cart-title'>YOUR SELECTION</span>
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
                        <StarsRanking ranking={3}/>
                        <h3>{data.hotelSelected.name}</h3>
                        <p className='description'>
                        {data.hotelSelected.roomDescription}
                        </p>
                        <div className='cart-hotel-details'>
                            <p className='description'>
                                Breakfast not included unless indicated otherwise Free Wi-FI
                            </p>
                            <div className='night-ticket-wrapper'>
                                <div className='night'>
                                    <span><FontAwesomeIcon className='edit-icon' icon={solid('bed')} /></span>
                                    <p className='description'> <span className='number'>{nbNights}</span> nights </p>
                                </div>
                                <div className='separator'></div>
                                <div className='ticket'>
                                    <span> <FontAwesomeIcon className='edit-icon' icon={solid('ticket')} /></span>
                                    <div>
                                        <p className='description'><span className='number'>{nbDays}</span> days</p> 
                                        <p className='parks'><span>2 parks</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='separator'></div>
                        <div className='cart-hotel-amount'>
                            <p className='hotel-amount-title'>Hotel and Park tickets</p>
                            <div>
                                <span className='price'>£{amount}</span>
                            </div>
                            <p className='taxes-infos'>Taxes & fees included</p>
                            <p className='colored-disclaimer'>Prices are subject to change depending on time of booking.</p>
                        </div>
                    </div>
                </div>
                <div className='cart-total-amount'>
                    <div className='total-amount-wrapper'>
                        <span className='total-amount-wrapper-title'>Total amount</span>
                        <span className='price'>£{amount}</span>
                    </div>
                    <p className='taxes-infos'>Taxes & fees included</p>
                </div>
                <div className='cart-button-wrapper'>
                    <MainButton style="" value="Next" arrowActive={true} fullwidth={true}/>
                </div>
            </div>
        </div>
  );
}

export default SideCart
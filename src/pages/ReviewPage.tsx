import React from 'react';
import "../assets/styles/reviewPage.css"
import SideCart from "../components/SideCart"
import * as orderActions from "../utils/reducers/order";
import { useNavigate } from "react-router-dom";
import banner from '../assets/images/banner.jpg';
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import StarsRanking from '../components/StarsRanking'
import HotelAccess from '../components/HotelAccess';
import HotelServices from '../components/HotelServices';


function ReviewPage (props) {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const data = useAppSelector(state => state.order);
    const oneDay = 1000 * 60 * 60 * 24;
    const nbDays = Math.round((data.dates.end.getTime() - data.dates.start.getTime()) / oneDay) + 1;

    function navigateTo() {
        dispatch(orderActions.unlockConfirmGuard());
        navigate('/confirm');
    }
    return  (
    <div className='review-page'>
        <div className='banner'>
            <img src={banner} alt="disney banner"/>
        </div>
        <div className="review-section">
        <h1 className='colored'>Guests</h1>
            <p className='subtitle'>You've got off to a great start! We now need a little extra information about you.</p>
            <div className="review-container">
                <div className='main-text-icon'><FontAwesomeIcon icon={solid('briefcase')} /><h4>Hotel + parks tickets</h4></div>
                <div className='separator'></div>
                <div className='review-hotel-wrapper'>
                    <h5> Included in your Hotel+Ticket package </h5>
                    <div className='text-icon'><FontAwesomeIcon icon={solid('briefcase')} /><h5>Hotel and Park tickets</h5></div>
                    <div className='text-icon'><FontAwesomeIcon icon={solid('bed')} /><h5>Hotel and Park tickets</h5></div>
                    <div className='hotel-infos'>
                        <div className='hotel-infos-header'>
                            <div className='hotel-image-box'>
                                <img src={data.hotelSelected.image} alt={data.hotelSelected.name}/>
                            </div>
                            <div>
                                <StarsRanking ranking={data.hotelSelected.ranking} />
                                <h3>{data.hotelSelected.name}</h3>
                                <HotelAccess access={data.hotelSelected.access}/>
                                <HotelServices services={data.hotelSelected.services} />
                            </div>
                        </div>
                        <p className='hotel-description'> { data.hotelSelected.description } </p>
                    </div>
                    <div className='text-icon'><FontAwesomeIcon icon={solid('ticket')} /><div><h5>{nbDays} Days / 2 Park Ticket</h5><p>With the entry tickets included in your package, you can visit the two Disney Parks as often as you like.</p></div></div>
                    <div className='text-icon'><FontAwesomeIcon icon={solid('ticket')} /><div><h5>Extra Magic Time</h5><p>Disney Hotel & Resorts advantage: enjoy exclusive park access before official opening times!</p></div></div>
                    <div className='text-icon'><FontAwesomeIcon icon={solid('ticket')} /><div><h5>Continue the magic after the Parks close</h5><p>The Disney Experience continues even when you have left the two parks: Disney Village offers a range of entertainment, themed restaurants, shopping and much more until late every night.</p></div></div>
                </div>
            </div>
            <div className="review-container">
                <div className='main-text-icon'><FontAwesomeIcon icon={solid('briefcase')} /><h4>Guests</h4></div>
                <div className='separator'></div>
                <div className='review-guest-wrapper'>
                    <h5> Principal contact </h5>
                    <p className='guest-uppercase'>{data.user.title} {data.user.firstName} {data.user.lastName}</p>
                    <p  className='guest-uppercase'>{data.user.adressLine1}</p>
                    <p  className='guest-uppercase'>{data.user.adressLine2}</p>
                    <p  className='guest-uppercase'>{data.user.postcode}, {data.user.city}, {data.user.country}</p>
                    <p>{data.user.phone}</p>
                    <p>{data.user.mail}</p>
                </div>
            </div>
        </div>
        <SideCart navigateFunction={() => navigateTo()} btnValue="Confirm & Pay" btnArrowActive={false}/>
    </div>
    );
  }
  
  export default ReviewPage;
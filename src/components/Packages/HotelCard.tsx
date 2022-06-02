import React from 'react';
import StarsRanking from "../StarsRanking";
import SelectHotel from "./SelectHotel"
import HotelAccess from "../HotelAccess"
import HotelServices from '../HotelServices';

type HotelCardProps = {
    hotel: Hotel;
    key: number;
};

class HotelCard extends React.Component<HotelCardProps> {
render() {
    return (
        <div className="hotel-card-container">
            <div className="hotel-card">
                <div className="image-container">
                    <img src={this.props.hotel.image} alt={this.props.hotel.name}></img>
                </div>
                <div className="card-details">
                    <StarsRanking ranking={this.props.hotel.ranking} />
                    <h3>{this.props.hotel.name}</h3>
                    <HotelAccess access={this.props.hotel.access}/>
                    <p className="description">
                        {this.props.hotel.description}
                    </p>
                    {this.props.hotel.disclaimer &&
                        <p className="disclaimer">* Depending on your date of visit, the duration of Extra Magic Time may vary, as may the number of Disney Parks in which it applies. Please check <a href="https://www.disneylandparis.com/en-gb/calendars/park-hours/" title="Calendars parc hours">this page</a> for more information.</p>
                    }
                    <HotelServices services={this.props.hotel.services}/>
                </div>
            </div>
            <div className='hotel-card-footer'>
                <SelectHotel hotel={this.props.hotel}/>
            </div>
        </div>
    )
    }
}

export default HotelCard;
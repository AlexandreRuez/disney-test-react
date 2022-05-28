import React from 'react';
import MainButton from "./MainButton";
import StarsRanking from "./StarsRanking";
import { Link } from "react-router-dom";

type Access = { icon: string; value: string; }

type Rating = { value: number; reviews: number; }

type Services = { icon: string; value: string; }

type Hotel = { 
    id: number; 
    name: string; 
    image: string; 
    ranking: number; 
    access: Access[]; 
    rating: Rating; 
    description: string; 
    services: Services[]; 
};

type HotelCardProps = {
    hotel: Hotel;
    key: number
  };

class HotelCard extends React.Component<HotelCardProps> {
    renderAccess(access) {
        return (
            <div className='access-container'>
                {access.map((accessValue,i) => (
                    <div key={i} className='access-badge'>
                        <img src={accessValue.icon} alt={accessValue.value}></img><p>{accessValue.value}</p>
                    </div>
                ))}
            </div>
        )
    }
    renderServices(services) {
        return (
            <div className='services-container'>
                {services.map((service,i) => (
                    <div key={i} className='services-badge'>
                         <div className='services-popup'><p>{service.value}</p></div>
                        <img src={service.icon} alt={service.value}></img>
                    </div>
                ))}
            </div>
        )
    }
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
                    {this.renderAccess(this.props.hotel.access)}
                    <p className="desciption">
                        {this.props.hotel.description}
                    </p>
                    {this.renderServices(this.props.hotel.services)}
                </div>
            </div>
            <div className='hotel-card-footer'>
                <Link to="/options"><MainButton value="Check" arrowActive={false} style=""/></Link>
            </div>
        </div>
    )
    }
}

export default HotelCard;
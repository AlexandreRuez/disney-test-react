import React from 'react';
import MainButton from "./MainButton"
import star from "../assets/images/star.svg";

class HotelCard extends React.Component {
    renderRanking(rate) {
        const stars = [];
        for (var i = 0; i < rate; i++) {
            stars.push(<i key={i}><img src={star} alt="star icon"></img></i>);
        }
        return (
            <div className='ranking-container'>
                {stars}
            </div>
        )
    }
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
                    {this.renderRanking(this.props.hotel.ranking)}
                    <h3>{this.props.hotel.name}</h3>
                    {this.renderAccess(this.props.hotel.access)}
                    <p className="desciption">
                        {this.props.hotel.description}
                    </p>
                    {this.renderServices(this.props.hotel.services)}
                </div>
            </div>
            <div className='hotel-card-footer'>
                <MainButton value="Check" arrowActive=""/>
            </div>
        </div>
    )
    }
}

export default HotelCard;
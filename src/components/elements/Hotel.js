import React from 'react';
import star from "../../assets/images/star.svg";

class Hotel extends React.Component {
    renderRanking(i) {
        return (
            <div className='ranking-container'>
                {Array.from(Array(i), () => {
                    return <i><img src={star} alt="star icon"></img></i>
                })}
            </div>
            
        )
    }
    renderAccess(access) {
        return (
            <div className='access-container'>
                {access.map(accessValue => (
                    <div className='access-badge'>
                        <img src={accessValue.icon} alt={accessValue.value}></img><p>{accessValue.value}</p>
                    </div>
                ))}
            </div>
        )
    }
    renderServices(services) {
        return (
            <div className='services-container'>
                {services.map(service => (
                    <div className='services-badge'>
                         <div className='services-popup'><p>{service.value}</p></div>
                        <img src={service.icon} alt={service.value}></img>
                    </div>
                ))}
            </div>
        )
    }
    render() {
    return (
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
    )
    }
}

export default Hotel;
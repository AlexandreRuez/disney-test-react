import React from 'react';

function HotelServices(props) {
    return (
        <div className='services-container'>
            {props.services.map((service,i) => (
                <div key={i} className='services-badge'>
                     <div className='services-popup'><p>{service.value}</p></div>
                    <img src={service.icon} alt={service.value}></img>
                </div>
            ))}
        </div>
    )
}

export default HotelServices
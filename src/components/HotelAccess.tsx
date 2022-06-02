import React from 'react';

function HotelAccess(props) {
    return (
        <div className='access-container'>
            {props.access.map((accessValue,i) => (
                <div key={i} className='access-badge'>
                    <img src={accessValue.icon} alt={accessValue.value}></img><p>{accessValue.value}</p>
                </div>
            ))}
        </div>
    )
}

export default HotelAccess
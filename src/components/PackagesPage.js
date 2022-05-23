import React from 'react';
import hotelsData from "../hotels.json"
import Hotel from "./elements/Hotel"

class PackagesPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                hotels : hotelsData,
        }

    }
    renderHotel() {
        return (
            this.state.hotels.map(hotel => (
                <Hotel hotel={hotel}/>
            ))
        )
    }

    render() {
        return  (
        <div className="hotel-list">
            <h2>
                DISNEY HOTELS AND LES VILLAGES NATURE PARIS
            </h2>
            {this.renderHotel()}
        </div>
        );
    }
  }
  
  export default PackagesPages;
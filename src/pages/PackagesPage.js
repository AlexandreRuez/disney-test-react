import React from 'react';
import hotelsData from "../data/hotels.json"
import "../assets/styles/packagesPage.css"
import SearchSection from "../components/SearchSection"
import HotelCard from "../components/HotelCard"

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
                <HotelCard hotel={hotel} key={hotel.id}/>
            ))
        )
    }

    render() {
        return  (
        <div>
            <SearchSection/>
            <div className="hotel-list">
                <h2>
                    DISNEY HOTELS AND LES VILLAGES NATURE PARIS
                </h2>
                {this.renderHotel()}
            </div>
        </div>
        );
    }
  }
  
  export default PackagesPages;
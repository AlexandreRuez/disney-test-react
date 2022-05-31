import React from 'react';
import hotelsData from "../data/hotels.json"
import "../assets/styles/packagesPage.css"
import SearchSection from "../components/Packages/SearchSection"
import HotelCard from "../components/Packages/HotelCard"

type PackagesPagesState = {
    hotels?: Hotel[];
};


class PackagesPages extends React.Component<PackagesPagesState> {
    state:PackagesPagesState = {
                hotels: hotelsData,
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
        <div className='packages-page'>
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
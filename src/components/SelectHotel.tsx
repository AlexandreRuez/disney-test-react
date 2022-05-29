import React from 'react';
import MainButton from "./MainButton"
import { Link } from "react-router-dom";
import * as hotelActions from "../utils/reducers/hotel";
import { useAppDispatch } from "../utils/hooks"

type ClickHandler = (hotel: Hotel) => (e: React.MouseEvent) => void;

function OptionCard(props) {
    const dispatch = useAppDispatch();
    const clickHandler: ClickHandler = (tag) => (e) => {
        selectHotel(tag);
    };
    function selectHotel(hotel) {
        dispatch(hotelActions.setHotelSelected(hotel))
    }
  return (
    <Link to="/options" onClick={clickHandler(props.hotel)}><MainButton value="Check" arrowActive={false} fullwidth={false} style=""/></Link>
  );
}

export default OptionCard
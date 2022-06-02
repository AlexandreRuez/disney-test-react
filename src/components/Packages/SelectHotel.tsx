import React from 'react';
import MainButton from "../MainButton"
import * as orderActions from "../../utils/reducers/order";
import { useAppDispatch, useAppSelector } from "../../utils/hooks"
import { useNavigate } from "react-router-dom";

type ClickHandler = (hotel: Hotel) => (e: React.MouseEvent) => void;

function OptionCard(props) {
    let navigate = useNavigate();
    const data = useAppSelector(state => state.order);
    const dispatch = useAppDispatch();
    const clickHandler: ClickHandler = (tag) => (e) => {
        selectHotel(tag);
    };
    function selectHotel(hotel) {
        if(data.dates.start != null && data.dates.end != null) {
          dispatch(orderActions.setHotelSelected(hotel))
          dispatch(orderActions.unlockOptionGuard())
          navigate("/options");
        }
        else {
          dispatch(orderActions.setDateError())
        }
    }
  return (
    <div onClick={clickHandler(props.hotel)}>
      <MainButton value="Check" arrowActive={false} fullwidth={false} outlineStyle={false} icon={false}/>
    </div>
  );
}

export default OptionCard
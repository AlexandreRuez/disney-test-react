import React, {useState} from 'react';
import "../../assets/styles/popupModal.css"
import MainButton from "../MainButton"
import OptionSelection from './OptionSelection';
import * as orderActions from "../../utils/reducers/order";
import { useAppDispatch, useAppSelector } from "../../utils/hooks"

function PopupModal(props) {

  const data = useAppSelector(state => state.order);
  // Je récupère et je vérifie les options qui ont déjà été selectionnées dans le parcours client pour pré-cocher les cases
  const [optionsSelected, setOptionsSelected] = useState<Array<optionsSelected>>(data.optionsSelected);
  const dispatch = useAppDispatch();

  function selectOption(event, option) {
    if(event.target.checked) {
      setOptionsSelected(optionsSelected => [...optionsSelected, option]);
    }
    else {
      const tmpOptionsSelected = [...optionsSelected];
      tmpOptionsSelected.splice(optionsSelected.findIndex(value => value.id === option.id),1)
      setOptionsSelected(tmpOptionsSelected);
    }
  }

  function updateOptions() {
    dispatch(orderActions.setOptions(optionsSelected));
    props.close();
  }

  // Pour simplifier le fichier json qui simule l'API et simplifier les tests, j'ai créé un évenement sélectionable par jour de présence dans le parc
  function renderSelectOptions() {
    const oneDay = 1000 * 60 * 60 * 24;
    const nbDays = Math.round((data.dates.end.getTime() - data.dates.start.getTime()) / oneDay)  + 1;
    const options = [];
    var dateInfo = new Date(data.dates.start);
    for (let i: number = 0; i < nbDays; i++) {

        options.push(
          <OptionSelection 
            id={i} 
            key={i} 
            checked={optionsSelected.findIndex(value => value.id === i) !== -1 ? true : false} date={dateInfo.toLocaleDateString("fr-FR", { weekday: 'long', day: '2-digit', month:'long', year: 'numeric' })}
            option={props.option} 
            selectOption={(event,option)=>selectOption(event, option)}
          />
        );
        dateInfo.setDate(dateInfo.getDate()+1);
    }
    return (
      <div>
        {options}
      </div>
    )
  }

  return (
    <div className="popup-modal-mask" onClick={() => props.close()}>
        <div className='popup-modal' onClick={(e) => {e.stopPropagation()}}>
            <div className='popup-modal-content'>
                <h1 className='colored'>{props.option.title}</h1>
                <p className='description'>{props.option.description}</p>
                <div className='popup-modal-description'>
                    <p>{props.option.detailedDescription}</p>
                    <div className='separator'></div>
                    <h6>ADDITIONAL INFORMATION</h6>
                    <p className='description'>Some experiences shows or events may not be available or may be modified depending on the evolution of the safety and sanitary measures and recommendations from public authorities.</p>
                </div>
                {renderSelectOptions()}
            </div>
            <div className='popup-modal-button-wrapper'>
              {/* setOptionsSelected quand on appuie sur le bouton retour pour réinitialiser la selection */}
              <div onClick={() => {props.close(); setOptionsSelected(data.optionsSelected)}}>
                <MainButton outlineStyle={true} value="Close" fullwidth={false} arrowActive={false} />
              </div>
              <div onClick={() => updateOptions()}>
                <MainButton outlineStyle={false} value="Select"  fullwidth={false} arrowActive={false} />
              </div>
            </div>
        </div>
    </div>
  );
}

export default PopupModal
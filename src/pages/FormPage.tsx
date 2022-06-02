import React, {useState} from 'react';
import "../assets/styles/Form.css"
import SideCart from "../components/SideCart"
import FormInput from "../components/Form/FormInput"
import * as orderActions from "../utils/reducers/order";
import { useAppDispatch, useAppSelector } from "../utils/hooks"
import FormSelect from '../components/Form/FormSelect';
import { useNavigate } from "react-router-dom";

function FormPage (props) {
    const data = useAppSelector(state => state.order);
    const [user, setUser] = useState<User>(data.user);
    const [mailError, setMailError] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const titleOptions = ["","LADY","LORD","MISS","MR","MRS","MS","MASTER"];
    const countryOptions = ["","FRANCE","AUSTRALIA","INDIA","ITALIA","MEXICO","PORTUGAL","UNITED STATES"];

    async function updateUser(userInputValue) {
        var tmpUser = {...user};
        setUser(Object.assign(tmpUser,userInputValue));
        dispatch(orderActions.setUser(Object.assign(tmpUser,userInputValue)));
    }

    function navigateTo() {
        if(data.user.mail != "" ) {
            dispatch(orderActions.unlockReviewGuard());
            navigate('/review');
        }
        else {
            setMailError(true);
        }
    }

    // Améliorations possibles :
    // Supprimer la prop "targetValue" et utiliser la référence de la prop "inputValue" dans le onChange de l'input pour modifier l'objet user dans la fonction updateUser()
    // Intégrer la vérification des champs obligatoires dans le component FormInput
    // Vérifier le format de l'adresse mail avec une RegEx

    return  (
    <div className='form-page'>
        <div className='form-section'>
        <h1 className='colored'>Guests</h1>
            <p className='subtitle'>You've got off to a great start! We now need a little extra information about you.</p>
            <div className='form-container'>
                <h4>Guests Information</h4>
                <div className='form-line'>
                    <FormInput label="Email*" targetValue="mail" inputValue={user.mail} maxLength={null} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false} error={mailError}/>
                </div>
                <div className='form-line'>
                    <FormInput label="Phone (30 characters max.)" maxLength={30} targetValue="phone" inputValue={user.phone} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                </div>
                <div className='form-line'>
                    <FormSelect label="Title" options={titleOptions} targetValue="title" inputValue={user.title} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                    <FormInput label="First name" maxLength={30} targetValue="firstName" inputValue={user.firstName} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                    <FormInput label="Last Name" maxLength={30} targetValue="lastName" inputValue={user.lastName} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                </div>
                <div className='form-line'>
                    <FormInput label="Adress Line 1 (30 characters max.)" maxLength={30} targetValue="adressLine1" inputValue={user.adressLine1} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={true}/>
                    <FormInput label="Adress Line 2 (30 characters max.)" maxLength={30} targetValue="adressLine2" inputValue={user.adressLine2} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={true}/>
                </div>
                <div className='form-line'>
                    <FormInput label="Postcode (12 characters max.)" maxLength={30} targetValue="postcode" inputValue={user.postcode} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                    <FormInput label="City" maxLength={30} targetValue="city" inputValue={user.city} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                    <FormSelect label="Country" options={countryOptions} targetValue="country" inputValue={user.country} updateUser={(userInputValue) => {updateUser(userInputValue)}} fullwidth={false}/>
                </div>
            </div>
        </div>
        <SideCart navigateFunction={() => navigateTo()} btnValue="Next" btnArrowActive={true}/>
    </div>
    );
  }
  
  export default FormPage;
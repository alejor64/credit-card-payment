import React, { useState } from 'react';
import { getCardTypeByValue, validateNumber } from '../../../application/helpers';
import cardImage from '../../assets/pay.png';
import {
  CARDS_IMGS,
  CARD_HOLDER_INPUT,
  CARD_NUMBER_INPUT,
  CV_INPUT,
  DATE_EXP_INPUT,
  ERROR_CARD_HOLDER_INPUT,
  ERROR_CARD_NUMBER_INPUT,
  ERROR_CV_INPUT,
  ERROR_DATE_EXP_INPUT,
  ERROR_USER_LASTNAME_INPUT,
  ERROR_USER_NAME_INPUT,
  FORM_INPUTS_NAMES,
  USER_ADDRESS_INPUT,
  USER_CITY_INPUT,
  USER_EMAIL_INPUT,
  USER_LASTNAME_INPUT,
  USER_MOBILE_INPUT,
  USER_NAME_INPUT,
  USER_OTHER_DETAIL_INPUT,
  USER_POSTAL_CODE_INPUT,
  USER_STATE_INPUT,
  EMIAL_REGEX,
  ERROR_USER_EMAIL_INPUT,
  ERROR_USER_MOBILE_INPUT,
  ERROR_USER_ADDRESS_INPUT,
  ERROR_USER_CITY_INPUT,
  ERROR_USER_STATE_INPUT
} from '../../../application/constants';
import './CardForm.scss';
import InputContainer from '../InputContainer/InputContainer';
import Textarea from '../Textarea/Textarea';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { billingRoute } from '../../../../billing/infrastructure/routes';

const CardForm = () => {
  const [imageValidator, setImageValidator] = useState(cardImage);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expdate, setExpdate] = useState('');
  const [code, setCode] = useState('');
  const [userName, setUserName] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [errorInputs, setErrorInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleValidate = (e) => {
    e.preventDefault();
    if(!validateNumber(cardNumber.replace(/\s/g, ''), 16)) {
      setErrors(CARD_NUMBER_INPUT, ERROR_CARD_NUMBER_INPUT);
    }else{
      setErrors(CARD_NUMBER_INPUT);
    }
    if(!cardName) {
      setErrors(CARD_HOLDER_INPUT, ERROR_CARD_HOLDER_INPUT);
    }else {
      setErrors(CARD_HOLDER_INPUT);
    }
    if(!validateNumber(expdate.replace('/', ''), 4)) {
      setErrors(DATE_EXP_INPUT, ERROR_DATE_EXP_INPUT);
    }else {
      setErrors(DATE_EXP_INPUT);
    }
    if(!validateNumber(code, 3)) {
      setErrors(CV_INPUT, ERROR_CV_INPUT);
    }else {
      setErrors(CV_INPUT);
    }
    if(!userName) {
      setErrors(USER_NAME_INPUT, ERROR_USER_NAME_INPUT);
    }else {
      setErrors(USER_NAME_INPUT);
    }
    if(!userLastname) {
      setErrors(USER_LASTNAME_INPUT, ERROR_USER_LASTNAME_INPUT);
    }else {
      setErrors(USER_LASTNAME_INPUT);
    }
    if(!EMIAL_REGEX.test(userEmail)) {
      setErrors(USER_EMAIL_INPUT, ERROR_USER_EMAIL_INPUT);
    }else {
      setErrors(USER_EMAIL_INPUT);
    }
    if(!validateNumber(userPhone, 10)) {
      setErrors(USER_MOBILE_INPUT, ERROR_USER_MOBILE_INPUT);
    }else {
      setErrors(USER_MOBILE_INPUT);
    }
    if(!address) {
      setErrors(USER_ADDRESS_INPUT, ERROR_USER_ADDRESS_INPUT);
    }else {
      setErrors(USER_ADDRESS_INPUT);
    }
    if(!city) {
      setErrors(USER_CITY_INPUT, ERROR_USER_CITY_INPUT);
    }else {
      setErrors(USER_CITY_INPUT);
    }
    if(!state) {
      setErrors(USER_STATE_INPUT, ERROR_USER_STATE_INPUT);
    }else {
      setErrors(USER_STATE_INPUT);
    }
    
    if(!Object.keys(errorInputs).length) {
      dispatch({
        userName,
        userLastname,
        userEmail,
        userPhone,
        address,
        postalCode,
        city,
        state,
        otherDetails,
      })
      navigate(billingRoute);
    }
  };

  const setErrors = (input, msg = '') => {
    setErrorInputs(prevState => ({
      ...prevState,
      [input]: msg,
    }))
  };

  const hanldeCardNumber = (e) => {
    const {value} = e.target;
    const cardNetwork = getCardTypeByValue(value);
    if(cardNetwork?.type) {
      setImageValidator(CARDS_IMGS[cardNetwork?.type]);
    }else {
      setImageValidator(cardImage);
    }
    const cleanNumber = value.replace(/\D/g, '');
    const groups = cleanNumber.match(/.{1,4}/g);
    setCardNumber(groups ? groups.slice(0, 4).join(' ') : '');
  };

  const handleName = (e, setName) => {
    const {data} = e.nativeEvent;
    if (!/[0-9]/.test(data)) {
      const {value} = e.target;
      setName(value.toUpperCase());
    }
  };

  const handleText = (e, setName) => {
    const {data} = e.nativeEvent;
    if (!/[0-9]/.test(data)) {
      const {value} = e.target;
      setName(value);
    }
  };

  const handleChange = (e, setText) => {
    const {value} = e.target;
    setText(value);
  };

  const onChangeExp = (e) => {
    let {value} = e.target;
    const expDateFormatter =
      value.replace(/\//g, "").substring(0, 2) +
      (value.length > 2 ? "/" : "") +
      value.replace(/\//g, "").substring(2, 4);
      setExpdate(expDateFormatter);
  };

  const handleCode = (event, length, setNumber) => {
    let {value} = event.target;
    value = value.replace(/\D/g, '');
    if (value.length > length) {
      value = value.slice(0, length);
    }
    setNumber(value);
  };
  
  return(
    <div className="form-section">
      <div className='form-container'>
        <form className='form' onSubmit={handleValidate}>
          <div className='form-section card-info'>
            <div className='title-section'>
              <h3 className='title'>Card details</h3>
            </div>
            <div className='image-container'>
              <img src={imageValidator} className="bigCard" />
            </div>
            
            <InputContainer
              title='Card number'
              placeholder='XXXX XXXX XXXX XXXX'
              onChange={hanldeCardNumber}
              name={CARD_NUMBER_INPUT}
              value={cardNumber}
              errorMsg={errorInputs[FORM_INPUTS_NAMES[CARD_NUMBER_INPUT]]}
            />

            <InputContainer
              title='Card owner name'
              placeholder='FULANITO PEREZ'
              onChange={(e) => handleName(e, setCardName)}
              name={CARD_HOLDER_INPUT}
              value={cardName}
              errorMsg={errorInputs[FORM_INPUTS_NAMES[CARD_HOLDER_INPUT]]}
            />

            <div className='double-input'>
              <InputContainer
                title='Expiration Date'
                placeholder='MM/AA'
                onChange={onChangeExp}
                name='date'
                value={expdate}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[DATE_EXP_INPUT]]}
              />
              <InputContainer
                title='CV'
                placeholder='XXX'
                onChange={(e) => handleCode(e, 3, setCode)}
                name={CV_INPUT}
                value={code}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[CV_INPUT]]}
              />
            </div>
          </div>

          <div className='form-section personal-info'>
            <div className='title-section'>
              <h3 className='title'>Personal info</h3>
            </div>
            <div className='double-input'>
              <InputContainer
                title='Name'
                placeholder='Juanito'
                onChange={(e) => handleText(e, setUserName)}
                name={USER_NAME_INPUT}
                value={userName}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_NAME_INPUT]]}
              />
              <InputContainer
                title='Lastname'
                placeholder='Rodriguez'
                onChange={(e) => handleText(e, setUserLastname)}
                name={USER_LASTNAME_INPUT}
                value={userLastname}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_LASTNAME_INPUT]]}
              />
            </div>
            <div className='double-input'>
              <InputContainer
                title='Email'
                placeholder='example@example.com'
                onChange={(e) => handleChange(e, setUserEmail)}
                name={USER_EMAIL_INPUT}
                value={userEmail}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_EMAIL_INPUT]]}
              />
              <InputContainer
                title='Mobile'
                placeholder='3141223243'
                onChange={(e) => handleCode(e, 10, setUserPhone)}
                name={USER_MOBILE_INPUT}
                value={userPhone}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_MOBILE_INPUT]]}
              />
            </div>
          </div>

          <div className='form-section ship-info'>
            <div className='title-section'>
              <h3 className='title'>Ship info</h3>
            </div>
            <div className='double-input'>
              <InputContainer
                title='Address'
                placeholder='1959 NE 153 ST'
                onChange={(e) => handleChange(e, setAddress)}
                name={USER_ADDRESS_INPUT}
                value={address}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_ADDRESS_INPUT]]}
              />
              <InputContainer
                title='Postal Code'
                placeholder='050034'
                onChange={(e) => handleCode(e, 6, setPostalCode)}
                name={USER_POSTAL_CODE_INPUT}
                value={postalCode}
                requires={false}
              />
            </div>
            <div className='double-input'>
              <InputContainer
                title='City'
                placeholder='Chicago'
                onChange={(e) => handleText(e, setCity)}
                name={USER_CITY_INPUT}
                value={city}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_CITY_INPUT]]}
              />
              <InputContainer
                title='State'
                placeholder='Illinois'
                onChange={(e) => handleText(e, setState)}
                name={USER_STATE_INPUT}
                value={state}
                errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_STATE_INPUT]]}
              />
            </div>
            <Textarea
              title='Other details'
              name={USER_OTHER_DETAIL_INPUT}
              onChange={(e) => handleChange(e, setOtherDetails)}
              value={otherDetails}
              errorMsg={errorInputs[FORM_INPUTS_NAMES[USER_OTHER_DETAIL_INPUT]]}
            />
          </div>
          
          <div className='btn-validate'>
            <button className='btn' variant="success" type='submit'>Validate</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardForm;
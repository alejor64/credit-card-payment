import React, { useState } from 'react';
import { getCardTypeByValue, matchCardLengthWith } from '../../../application/helpers';
import cardImage from '../../assets/pay.png';
import { CARDS_IMGS } from '../../../application/constants';
import './CardForm.scss';

const CardForm = () => {
  const [imageValidator, setImageValidator] = useState(cardImage);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expdate, setExpdate] = useState('');
  const [code, setCode] = useState(0);
  const [userName, setUserName] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState(0);
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState(0);
  const [otherDetails, setOtherDetails] = useState('');

  const handleValidate = () => {
    console.log('HOLA')
  }

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
        <form className='form'>
          <div className='form-section card-info'>
            <div className='title-section'>
              <h3 className='title'>Card details</h3>
            </div>
            <div className='image-container'>
              <img src={imageValidator} className="bigCard" />
            </div>
              
            <div className='input-contianer'>
              <label htmlFor='card-number'>Card number</label>
              <input
                placeholder="0000 0000 0000 0000"
                autoComplete="off"
                onChange={hanldeCardNumber}
                name='card-number'
                value={cardNumber}
              />
            </div>

            <div className='input-contianer'>
              <label htmlFor='card-name'>Card holder</label>
              <input
                placeholder="Fulanito Perez"
                autoComplete="off"
                name='card-name'
                onChange={(e) => handleName(e, setCardName)}
                value={cardName}
              />
            </div>

            <div className='double-input'>
              <div className='input-contianer'>
                <label htmlFor='date'>Expiration Date</label>
                <input type='text' name='date' autoComplete="off" placeholder="MM/AA" onChange={onChangeExp} value={expdate} />
              </div>
              <div className='input-contianer'>
                <label htmlFor='name'>Code</label>
                <input placeholder="000" name='code' autoComplete="off" value={code} onChange={(e) => handleCode(e, 3, setCode)}/>
              </div>
            </div>
          </div>

          <div className='form-section personal-info'>
            <div className='title-section'>
              <h3 className='title'>Personal info</h3>
            </div>
            <div className='double-input'>
              <div className='input-contianer'>
                <label htmlFor='user-name'>Name</label>
                <input
                  placeholder="Juanito"
                  autoComplete="off"
                  name='user-name'
                  onChange={(e) => handleName(e, setUserName)}
                  value={userName}
                />
              </div>
              <div className='input-contianer'>
                <label htmlFor='user-lastname'>Lastname</label>
                <input
                  placeholder="Rodriguez"
                  autoComplete="off"
                  name='user-name'
                  onChange={(e) => handleName(e, setUserLastname)}
                  value={userLastname}
                />
              </div>
            </div>
            <div className='double-input'>
              <div className='input-contianer'>
                <label htmlFor='user-email'>Email</label>
                <input
                  placeholder="example@example.com"
                  autoComplete="off"
                  name='user-email'
                  onChange={(e) => handleChange(e, setUserEmail)}
                  value={userEmail}
                />
              </div>
              <div className='input-contianer'>
                <label htmlFor='user-phone'>Mobile</label>
                <input
                  placeholder="3141223243"
                  autoComplete="off"
                  name='user-name'
                  onChange={(e) => handleCode(e, 10, setUserPhone)}
                  value={userPhone}
                />
              </div>
            </div>
          </div>

          <div className='form-section ship-info'>
            <div className='title-section'>
              <h3 className='title'>Ship info</h3>
            </div>
            <div className='double-input'>
              <div className='input-contianer'>
                <label htmlFor='user-name'>Address</label>
                <input
                  placeholder="Juanito"
                  autoComplete="off"
                  name='user-name'
                  onChange={(e) => handleChange(e, setAddress)}
                  value={address}
                />
              </div>
              <div className='input-contianer'>
                <label htmlFor='user-lastname'>Postal Code</label>
                <input
                  placeholder="Rodriguez"
                  autoComplete="off"
                  name='user-name'
                  onChange={(e) => handleCode(e, 6, setPostalCode)}
                  value={userLastname}
                />
              </div>
            </div>
            <div className='input-contianer'>
              <label htmlFor='user-postal-code'>Other details</label>
              <input
                placeholder="example@example.com"
                autoComplete="off"
                name='user-postal-code'
                onChange={(e) => handleChange(e, setOtherDetails)}
                value={otherDetails}
              />
            </div>
          </div>
          
          <div>
            <button variant="success" onClick={handleValidate}>Validate</button>{' '}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardForm;
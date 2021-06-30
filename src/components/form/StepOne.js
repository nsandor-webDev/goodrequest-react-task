import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toggleSupportType, setValue, chooseShelter, setShelterID } from '../../features/formSlice'
import axios from "axios";


//assets
import Wallet from '../../assets/icons/wallet.svg'
import WalletWhite from '../../assets/icons/wallet-white.svg'
import PawWhite from '../../assets/icons/paw-white.svg'
import Paw from '../../assets/icons/paw.svg'

// form validation
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
  value: Yup.string().min(1,"Minimálna čiastka je 1€ !").required("Je potrebné vybrať čiastku !")
})

export function StepOne() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://frontend-assignment-api.goodrequest.com/api/v1/shelters")
    .then((response) => {
      setUsers(response.data.shelters)
    })
  }, [])

  // API end point - Get shelters
  //console.log(users)
  const dispatch = useDispatch()
  const history = useHistory()
  
  // Forms data
  const donateDogShelter = useSelector(state => state.donateDogShelter)
  const shelterName = useSelector(state => state.shelterName)
  const value = useSelector(state => state.value)
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ 
    defaultValues: { donateDogShelter, shelterName, value},
    resolver: yupResolver(schema) ,
    mode: "onBlur"
  })
    
  // On custom amoount label click - set custom radio option checked
  const handleLabelClick = (e) => {
    let customAmountRadio=document.getElementById('customInput');
    customAmountRadio.checked=true;
  }

  // When input text field changed
  // get value from text field and set to radio button
  const handleInputChange = e => {
    document.getElementById('customInput').value = e.target.value
  };

  const handleChange = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    dispatch(setShelterID(e.target.options[selectedIndex].getAttribute('data-key')))
  };
  

  const onSubmit = (data) => {
    let customValue = document.getElementById('customInput').value;

    dispatch(chooseShelter(data.shelterName))
    if (customValue !== "on") dispatch(setValue(customValue)) 
    else dispatch(setValue(data.value))

    history.push("./step-2")
  } 

  const changeWallet = () => {
    let icon = document.getElementById('wallet');
    (icon.src === "http://localhost:3000" + WalletWhite && !donateDogShelter) ? icon.src = "http://localhost:3000" + Wallet : icon.src = "http://localhost:3000" + WalletWhite
  }

  const changePaw = () => {
    let icon = document.getElementById('paw');
    (icon.src === "http://localhost:3000" + PawWhite  && donateDogShelter) ? icon.src = "http://localhost:3000" + Paw : icon.src = "http://localhost:3000" + PawWhite
  }

  return (
   <div>
     <div className="pagination">
       <span className="active"></span>
       <span></span>
       <span></span>
     </div>
    <h1>Vyberte možnosť, ako chcete pomôcť</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Support type */}
      <div className="chooseType">
        <label className="optionContainer" onMouseEnter={changeWallet} onMouseLeave={changeWallet}>
            <input type="radio" name="donateDogShelter" onChange={() => dispatch(toggleSupportType())} />
            <div className="typeLabel"> 
              <span className="icon">
                {(donateDogShelter) ? <img src={WalletWhite} alt='Wallet icon' id='wallet'/> : <img src={Wallet} alt='Wallet icon' id='wallet'/>}
              </span>
              <h2>Chcem finančne prispieť konkrétnemu útulku </h2>
            </div>
        </label>
        <label className="optionContainer" onMouseEnter={changePaw} onMouseLeave={changePaw}>
            <input type="radio" name="donateDogShelter"  onChange={() => dispatch(toggleSupportType())} defaultChecked/>
            <div className="typeLabel right">
              <span className="icon">
                {(donateDogShelter) ? <img src={Paw} alt='Paw icon' id='paw'/> : <img src={PawWhite} alt='Paw icon' id='paw'/>}
              </span> 
              <h2>Chcem finančne prispieť celej nadácii</h2>
            </div>
        </label>
      </div>

      {/* Choose shelter */}
      <div className="meta-info">
        <h2 className="subTitle">O projekte</h2>
        <span className="required">
          {donateDogShelter ? "Povinné" : "Nepovinné"}
        </span>
      </div>
      <div className="chooseShelter">
      <label htmlFor="dogShelter">Útulok</label>
        <select id="shelterName" name="shelterName" defaultValue="" required={donateDogShelter} {...register('shelterName')} onChange={ (e) => handleChange(e)}> 
            <option value="" disabled hidden> Vyberte útulok zo zoznamu</option>
          {users.map(user => <option value={user.name} key={user.id} data-key={user.id}>{user.name}</option>)}
        </select> 
        <span className="arrow"></span>
      </div>
      {/* Choose amount / set amount */}
      <h2 className="subTitle">Suma, ktorou chcete prispieť</h2>
      <div className="chooseAmount">
        <label>
          <input type="radio" name="value" value="5"  {...register('value')} /> 
          <span className="radioBtn">5 €</span>
        </label>
        <label>
          <input type="radio" name="value" value="10"   {...register('value')} /> 
          <span className="radioBtn">10 €</span>
        </label>
        <label>
          <input type="radio" name="value" value="20"   {...register('value')} /> 
          <span className="radioBtn">20 €</span>
        </label>
        <label>
          <input type="radio" name="value" value="30"   {...register('value')} /> 
          <span className="radioBtn">30 €</span>
        </label>
        <label>
          <input type="radio" name="value" value="50"   {...register('value')} /> 
          <span className="radioBtn">50 €</span>
        </label>
        <label>
          <input type="radio" name="value" value="100"   {...register('value')} /> 
          <span className="radioBtn">100 €</span>
        </label>
        {/* Set custom value */}
        <label onClick={handleLabelClick}>
          <input type="radio" name="value" id="customInput"  {...register('value')} /> 
          <span className="radioBtn"><input type="text" name="customValue" onChange={handleInputChange} {...register('value')}/> €</span>
        </label>
        {errors.lastName && (
                <span className="err-message" >
                  {errors.lastName.message}
                </span>
        )} 
      </div>
      <div className="button-group">
        {isValid ? <button>Pokračovať</button>  : <button disabled>Pokračovať</button> } 
      </div>
    </form>
   </div>
  )
}
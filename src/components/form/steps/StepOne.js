import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm} from 'react-hook-form'
import { toggleSupportType, setAmount, chooseShelter } from '../../../features/formSlice'

//assets
import Wallet from '../../../assets/icons/wallet.svg'
import WalletWhite from '../../../assets/icons/wallet-white.svg'
import PawWhite from '../../../assets/icons/paw-white.svg'
import Paw from '../../../assets/icons/paw.svg'

export function StepOne() {
  const dispatch = useDispatch()
  const history = useHistory()
  
  // Forms data
  const donateDogShelter = useSelector(state => state.donateDogShelter)
  const dogShelter = useSelector(state => state.dogShelter)
  const amount = useSelector(state => state.amount)
  const { register, handleSubmit } = useForm({ defaultValues: { donateDogShelter, dogShelter, amount} })
    
  // On custom amoount label click - set custom radio option checked
  const handleLabelClick = (e) => {
    let customAmountRadio=document.getElementById('customAmount');
    customAmountRadio.checked=true;
  }

  // When input text field changed
  // get value from text field and set to radio button
  const handleInputChange = e => {
    document.getElementById('customAmount').value = e.target.value
  };
  

  const onSubmit = (data) => {
    let customAmount = document.getElementById('customAmount').value;

    dispatch(chooseShelter(data.dogShelter))
    if (customAmount !== "on") dispatch(setAmount(customAmount)) 
    else dispatch(setAmount(data.amount))

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
        <select id="dogShelter" name="dogShelter" defaultValue="" required={donateDogShelter} {...register('dogShelter')}> 
            <option value="" disabled hidden> Vyberte útulok zo zoznamu</option>
            <option value="first">Prvý</option>
            <option value="second">Druhý</option>
            <option value="third">Tretí</option>
        </select> 
        <span className="arrow"></span>
      </div>
      {/* Choose amount / set amount */}
      <h2 className="subTitle">Suma, ktorou chcete prispieť</h2>
      <div className="chooseAmount">
        <label>
          <input type="radio" name="amount" value="5"  {...register('amount')} /> 
          <span className="radioBtn">5 €</span>
        </label>
        <label>
          <input type="radio" name="amount" value="10"   {...register('amount')} /> 
          <span className="radioBtn">10 €</span>
        </label>
        <label>
          <input type="radio" name="amount" value="20"   {...register('amount')} /> 
          <span className="radioBtn">20 €</span>
        </label>
        <label>
          <input type="radio" name="amount" value="30"   {...register('amount')} /> 
          <span className="radioBtn">30 €</span>
        </label>
        <label>
          <input type="radio" name="amount" value="50"   {...register('amount')} /> 
          <span className="radioBtn">50 €</span>
        </label>
        <label>
          <input type="radio" name="amount" value="100"   {...register('amount')} /> 
          <span className="radioBtn">100 €</span>
        </label>
        {/* Set custom amount */}
        <label onClick={handleLabelClick}>
          <input type="radio" name="amount" id="customAmount"  {...register('amount')} /> 
          <span className="radioBtn"><input type="text" name="amountCustom" onChange={handleInputChange} /> €</span>
        </label>
      </div>
      <div className="button-group">
        <button>Pokračovať</button>
      </div>
    </form>
   </div>
  )
}
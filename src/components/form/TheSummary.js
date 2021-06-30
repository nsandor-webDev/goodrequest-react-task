import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from "axios";
import {useForm} from 'react-hook-form'

// form validation
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = Yup.object().shape({
  terms: Yup.boolean().oneOf([true], 'Musíte súhlasiť so spracovaním osobných údajov !'),
})

export const TheSummary = () => {
  // Whole state
  let state = {...useSelector(state => state)}
  // JSON format - POST Request
  delete state.donateDogShelter
  delete state.shelterName
  state.shelterID = parseInt(state.shelterID)
  // Render data from store
  const type = useSelector((state) => state.donateDogShelter)
  const shelterName = useSelector((state) => state.shelterName)
  const value = useSelector((state) => state.value)
  const firstName = useSelector((state) => state.firstName)
  const lastName = useSelector((state) => state.lastName)
  const fullName = firstName + " " + lastName
  const email = useSelector((state) => state.email)
  const phone = useSelector((state) => state.phone)

  const terms = useSelector(state => state.terms)
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ 
    defaultValues: { terms }, 
    resolver: yupResolver(schema),
    mode: "all"
})

  const onSubmit = () => {
    axios.post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute',
     state
    )
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  return (
    <div>
     <div className="pagination">
       <span></span>
       <span></span>
       <span className="active"></span>
     </div>
      <h1>Potrebujeme od Vás zopár informácií</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="summary">
          <h2 className="subTitle">Akou formou chcem pomôcť</h2>
          <p>{type ? "Chcem finančne prispieť konkrétnemu útulku" : "Chcem finančne prispieť celej nadácii"}</p>
          
          <h2 className="subTitle">Najviac mi záleží na útulku</h2>
          <p>{(shelterName !== "") ? shelterName : 'Nevybral som žiadny útulok'}</p>
          
          <h2 className="subTitle">Suma, ktorou chcem pomôcť</h2>
          <p>{value} €</p>
          
          <h2 className="subTitle">Meno a priezvisko</h2>
          <p>{fullName}</p>

          <h2 className="subTitle">E-mailová adresa</h2>
          <p>{email}</p>

          <h2 className="subTitle">Telefónne číslo</h2>
          <p>{phone}</p>

          <label>
            <input type="checkbox" name="terms" id="terms" {...register('terms')} />
            <span className="checkmark"></span>
            <span className="agreementText">Súhlasím so spracovaním mojich osobných údajov</span>
            {errors.terms && (
                <span className="err-message" >
                  {errors.terms.message}
                </span>
              )} 
          </label>
        </div>
        <div className="button-group">
          <Link to="/step-2" className="back-btn">Späť</Link>
          {isValid ? <button>Odoslať formulár</button>  : <button disabled>Odoslať formulár</button> }
        </div>
      </form>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    
    </div>
  )
}
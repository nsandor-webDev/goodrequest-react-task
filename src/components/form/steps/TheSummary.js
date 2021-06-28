import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from "axios";

export const TheSummary = () => {
  let state = {...useSelector(state => state)}
  delete state.donateDogShelter
  delete state.shelterName
  const type = useSelector((state) => state.donateDogShelter)
  const shelterName = useSelector((state) => state.shelterName)
  const value = useSelector((state) => state.value)
  const firstName = useSelector((state) => state.firstName)
  const lastName = useSelector((state) => state.lastName)
  const fullName = firstName + " " + lastName
  const email = useSelector((state) => state.email)
  const phone = useSelector((state) => state.phone)
  const headers = {
    'content-type': 'application/json'
 }
  

  const onSubmit = () => {
    console.log(state)
    axios.post('https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute',
      {
        "shelterID": state.shelterID,
        "value": state.value,
        "firstName": state.firstName,
        "lastName": state.lastName,
        "email": state.email,
        "phone": state.phone
      }, headers
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
            <input type="checkbox" name="agreement"/>
            <span className="checkmark"></span>
            <span className="agreementText">Súhlasím so spracovaním mojich osobných údajov</span>
          </label>


        </div>
        <div className="button-group">
          <Link to="/step-2" className="back-btn">Späť</Link>
          <button onClick={onSubmit}>Odoslať formulár</button>
        </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    
    </div>
  )
}
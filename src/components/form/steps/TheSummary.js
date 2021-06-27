import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const TheSummary = () => {
  const type = useSelector((state) => state.donateDogShelter)
  const shelter = useSelector((state) => state.dogShelter)
  const amount = useSelector((state) => state.amount)
  const fullname = useSelector((state) => state.name) + " " + useSelector((state) => state.surname)
  const email = useSelector((state) => state.email)
  const phone = useSelector((state) => state.phone)
  

  const onSubmit = () => {
    alert("ok !")
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
          <p>{(shelter.length !== 0) ? shelter : 'Nevybral som žiadny útulok'}</p>
          
          <h2 className="subTitle">Suma, ktorou chcem pomôcť</h2>
          <p>{amount}</p>
          
          <h2 className="subTitle">Meno a priezvisko</h2>
          <p>{fullname}</p>

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

      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    
    </div>
  )
}
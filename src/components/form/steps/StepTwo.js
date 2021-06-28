import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { setEmail, setFirstName, setPhone, setLastName } from '../../../features/formSlice'

export const StepTwo= () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const firstName = useSelector(state => state.firstName)
  const lastName = useSelector(state => state.lastName)
  const email = useSelector(state => state.email)
  const phone = useSelector(state => state.phone)
  const { register, handleSubmit } = useForm({ defaultValues: { firstName, lastName, email, phone } })

  const onSubmit = (data) => {
    dispatch(setFirstName(data.firstName))
    dispatch(setLastName(data.lastName))
    dispatch(setEmail(data.email))
    dispatch(setPhone(data.phone))
    history.push("./summary")
  } 

  return (
    <div>
      <div className="pagination">
       <span></span>
       <span className="active"></span>
       <span></span>
     </div>
      <h1>Potrebujeme od Vás zopár informácií</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="subTitle">O vás</h2>
        <div className="meta-data">
          <label> 
            <span>Meno</span>  
            <input type="text" id="firstName" name="firstName" {...register('firstName')} placeholder="Zadajte Vaše meno"/>
          </label>
          <label> 
            <span>Priezvisko</span>  
            <input type="text" id="lastName" name="lastName" {...register('lastName')} placeholder="Zadajte Vaše priezvisko"/>
          </label>
          <label> 
            <span>E-mailová adresa</span>  
            <input type="text" id="email" name="email" {...register('email')} placeholder="Zadajte Váš e-mail"/>
          </label>
          <label> 
            <span>Telefónne číslo </span> 
            <input type="text" id="phone" name="phone" {...register('phone')} placeholder="+421"/>
          </label>
        </div>
        <div className="button-group">
        <Link to="/" className="back-btn">Späť</Link>
        <button>Pokračovať</button>
      </div>
      </form>
    </div>
  )
}
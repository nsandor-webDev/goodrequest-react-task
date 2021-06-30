import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { setEmail, setFirstName, setPhone, setLastName } from '../../features/formSlice'

// form validation
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = Yup.object().shape({
  lastName: Yup.string().required("Tento údaj je povinný!"),
  email: Yup.string().email("Nesprávny formát e-mailovej adresy!").required("Tento údaj je povinný!"),
  phone: Yup.string().matches(phoneRegExp, 'Nesprávny formát čísla').required("Tento údaj je povinný!")
})

export const StepTwo= () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const firstName = useSelector(state => state.firstName)
  const lastName = useSelector(state => state.lastName)
  const email = useSelector(state => state.email)
  const phone = useSelector(state => state.phone)
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ 
        defaultValues: { firstName, lastName, email, phone }, 
        resolver: yupResolver(schema) ,
        mode: "onBlur"
  })

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
            <span className="title">Meno</span>  
            <input type="text" id="firstName" name="firstName" {...register('firstName')} placeholder="Zadajte Vaše meno"/>
          </label>
          <label> 
            <span className="title">Priezvisko</span>  
            <input type="text" id="lastName" name="lastName" {...register('lastName')} placeholder="Zadajte Vaše priezvisko"/>
              {errors.lastName && (
                <span className="err-message" >
                  {errors.lastName.message}
                </span>
              )} 
          </label>
          <label> 
            <span className="title">E-mailová adresa</span>  
            <input type="text" id="email" name="email" {...register('email')} placeholder="Zadajte Váš e-mail"/>
            {errors.email && (
                <span className="err-message" >
                 {errors.email.message}
                </span>
            )} 
          </label>
          <label> 
            <span className="title">Telefónne číslo </span> 
            <input type="text" id="phone" name="phone" {...register('phone')} placeholder="+421"/>
            {errors.phone && (
                <span className="err-message" >
                 {errors.phone.message}
                </span>
            )} 
          </label>
        </div>
        <div className="button-group">
        <Link to="/" className="back-btn">Späť</Link>
        {isValid ? <button>Pokračovať</button>  : <button disabled>Pokračovať</button> } 
      </div>
      </form>
    </div>
  )
}
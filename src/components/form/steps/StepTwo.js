import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { setEmail, setName, setPhone, setSurname } from '../../../features/formSlice'

export const StepTwo= () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const name = useSelector(state => state.name)
  const surname = useSelector(state => state.surname)
  const email = useSelector(state => state.email)
  const phone = useSelector(state => state.phone)
  const { register, handleSubmit } = useForm({ defaultValues: { name, surname, email, phone } })

  const onSubmit = (data) => {
    dispatch(setName(data.name))
    dispatch(setSurname(data.surname))
    dispatch(setEmail(data.email))
    dispatch(setPhone(data.phone))
    history.push("./summary")
  } 

  return (
    <div className="step-two">
      <h1>Potrebujeme od Vás zopár informácií</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="subTitle">O vás</h2>
          <label>Meno 
            <input type="text" id="name" name="name" {...register('name')}/>
          </label>
          <label>Priezvisko 
            <input type="text" id="surname" name="surname" {...register('surname')}/>
          </label>
          <label>E-mailová adresa 
            <input type="text" id="email" name="email" {...register('email')}/>
          </label>
          <label>Telefónne číslo 
            <input type="text" id="phone" name="phone" {...register('phone')}/>
          </label>
        <button>Ďalej</button>
      </form>
    </div>
  )
}
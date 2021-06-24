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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Meno</label>
        <input type="text" id="name" name="name" {...register('name')}/>
      </div>
      <div>
        <label htmlFor="surname">Priezvisko</label>
        <input type="text" id="surname" name="surname" {...register('surname')}/>
      </div>
      <div>
        <label htmlFor="email">E-mailová adresa</label>
        <input type="text" id="email" name="email" {...register('email')}/>
      </div>
      <div>
        <label htmlFor="phone">Telefónne číslo</label>
        <input type="text" id="phone" name="phone" {...register('phone')}/>
      </div>
      <button>Ďalej</button>
    </form>
  )
}
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { setName } from '../features/formSlice'

export const StepTwo= () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const name = useSelector(state => state.name)
  const { register, handleSubmit } = useForm({ defaultValues: { name } })

  const onSubmit = (data) => {
    dispatch(setName(data.name))
    history.push("./summary")
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Meno</label>
        <input type="text" id="name" name="name" {...register('name')}/>
      </div>
      <button>Ďalej</button>
    </form>
  )
}
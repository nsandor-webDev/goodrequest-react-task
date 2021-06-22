import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { chooseShelter } from '../features/formSlice'

export const StepOne = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const dogShelter = useSelector(state => state.dogShelter)
  const { register, handleSubmit } = useForm({ defaultValues: { dogShelter } })

  const onSubmit = (data) => {
    dispatch(chooseShelter(data.dogShelter))
    history.push("./step-2")
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="dogShelter">Útulok</label>
        <select id="dogShelter" name="dogShelter" {...register('dogShelter')}>
          <option value="first">Prvý</option>
          <option value="second">Druhý</option>
          <option value="third">Tretí</option>
        </select>
      </div>
      <button>Ďalej</button>
    </form>
  )
}
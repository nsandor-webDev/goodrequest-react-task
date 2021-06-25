import { createSlice } from '@reduxjs/toolkit';

export const twoStepFormSlice = createSlice({
    name: 'twoStepForm',
    initialState: {
        donateDogShelter: false,
        dogShelter: "",
        amount: 5,
        name: "",
        surname: "",
        email: "",
        phone: ""
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggleSupportType: state => { state.donateDogShelter = !state.donateDogShelter},
        chooseShelter: (state, action) => { state.dogShelter = action.payload; },
        setAmount: (state, action) => { state.amount = action.payload },   
        setName: (state, action) => { state.name = action.payload },
        setSurname: (state, action) => { state.surname = action.payload },  
        setEmail: (state, action) => { state.email = action.payload },
        setPhone: (state, action) => { state.phone = action.payload }
    }
  });

  export const reducer = twoStepFormSlice.reducer

  export const {toggleSupportType, chooseShelter, setAmount, setName, setSurname, setEmail, setPhone} = twoStepFormSlice.actions
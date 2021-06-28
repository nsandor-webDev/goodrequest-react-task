import { createSlice } from '@reduxjs/toolkit';

export const twoStepFormSlice = createSlice({
    name: 'twoStepForm',
    initialState: {
        donateDogShelter: false,
        shelterName: "",
        shelterID: 0,
        value: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggleSupportType: state => { state.donateDogShelter = !state.donateDogShelter},
        chooseShelter: (state, action) => { state.shelterName = action.payload; },
        setShelterID: (state, action) => { state.shelterID = action.payload; },
        setValue: (state, action) => { state.value = action.payload },   
        setFirstName: (state, action) => { state.firstName = action.payload },
        setLastName: (state, action) => { state.lastName = action.payload },  
        setEmail: (state, action) => { state.email = action.payload },
        setPhone: (state, action) => { state.phone = action.payload }
    }
  });

  export const reducer = twoStepFormSlice.reducer

  export const {toggleSupportType, chooseShelter, setShelterID, setValue, setFirstName, setLastName, setEmail, setPhone} = twoStepFormSlice.actions
import { createSlice } from '@reduxjs/toolkit';

export const twoStepFormSlice = createSlice({
    name: 'twoStepFormS',
    initialState: {
        dogShelter: "first",
        //amount: 1,
        name: "",
        //surname: "",
        //email: ""
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        chooseShelter: (state, action) => { state.dogShelter = action.payload },
        //setAmount: (state, action) => { state.amount = action.payload },  
        setName: (state, action) => { state.name = action.payload }
        //setSurname: (state, action) => { state.surname = action.payload },  
       // setEmail: (state, action) => { state.email = action.payload }
    }
  });

  export const reducer = twoStepFormSlice.reducer

  export const {chooseShelter, setAmount, setName, setSurname, setEmail} = twoStepFormSlice.actions
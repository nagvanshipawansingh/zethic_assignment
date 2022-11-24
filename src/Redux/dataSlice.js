import { createSlice, current } from "@reduxjs/toolkit";
import { getData } from "../helpers/getData";

const initialState = {
  initialData: getData(100),
  userDetais: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    userData(state, action) {
    //   console.log({ state: current(state) });
      state.userDetais = state.initialData.find(
        (elem) => elem.id === action.payload);
    
    },
  },
});

export const { userData } = dataSlice.actions;

export default dataSlice.reducer;

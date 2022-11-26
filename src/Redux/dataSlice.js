import { createSlice, current } from '@reduxjs/toolkit';
import { generateChart } from '../helpers/generate-chart';
import { getData } from '../helpers/getData';

const initialState = {
  initialData: getData(100),
  userDetais: {},
  chartDetails: {
    countryVsUser: {},
    carManufacturer: {}
  }
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    userData(state, action) {
      // console.log({ state: current(state) });
      state.userDetais = state.initialData.find((elem) => elem.id === action.payload);
    },
    generateUserChartData(state) {
      const { countryVsUser, carManufacturer } = generateChart(current(state.initialData));
      state.chartDetails.countryVsUser = countryVsUser;
      state.chartDetails.carManufacturer = carManufacturer;

      // console.log({ chartDetails: generateChart(current(state.initialData)) });
    }
  }
});

export const { userData, generateUserChartData } = dataSlice.actions;

export default dataSlice.reducer;

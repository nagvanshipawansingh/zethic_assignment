import { createSlice, current } from '@reduxjs/toolkit';
import { generateChart } from '../helpers/generate-chart';
import { getData } from '../helpers/getData';

const initialState = {
  initialData: [],
  filteredUserDetails: [],
  userDetails: {},
  chartDetails: {
    countryVsUser: {},
    carManufacturer: {}
  }
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    generateUserData(state, action) {
      const userData = getData(action.payload || 100);
      state.initialData = userData;
      state.filteredUserDetails = userData;
    },
    userData(state, action) {
      state.userDetails = state.initialData.find((elem) => elem.id === action.payload);
    },
    generateUserChartData(state) {
      const { countryVsUser, carManufacturer } = generateChart(current(state.initialData));
      state.chartDetails.countryVsUser = countryVsUser;
      state.chartDetails.carManufacturer = carManufacturer;
    }
  }
});

export const { userData, generateUserChartData, generateUserData } = dataSlice.actions;

export default dataSlice.reducer;

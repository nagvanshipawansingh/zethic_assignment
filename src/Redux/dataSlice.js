import { createSlice, current } from '@reduxjs/toolkit';
import { filterUserAge, filterUserManufacturer } from '../helpers/filterUser';
import { generateChart } from '../helpers/generate-chart';
import { getData } from '../helpers/getData';

const initialState = {
  initialData: [],
  filteredUserDetails: [],
  filteredUserByCarDetails: [],
  userDetails: {},
  chartDetails: {
    countryVsUser: {},
    carManufacturer: {},
    carAge: {}
  },
  filterName: '',
  carManufacturerName: ''
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
      const { countryVsUser, carManufacturer, carAge } = generateChart(current(state.initialData));
      state.chartDetails.countryVsUser = countryVsUser;
      state.chartDetails.carManufacturer = carManufacturer;
      state.chartDetails.carAge = carAge;
    },
    filterUserByManufacturer(state, action) {
      state.carManufacturerName = action.payload.name;
      const filterUser = filterUserManufacturer(current(state.initialData), action.payload.name);
      state.filteredUserByCarDetails = filterUser;
    },
    filter(state, action) {
      state.filterName = action.payload.name;
      const filterUser = filterUserAge(
        current(state.initialData),
        action.payload.min,
        action.payload.max
      );
      state.filteredUserDetails = filterUser;

      const { countryVsUser, carManufacturer, carAge } = generateChart(filterUser);
      state.chartDetails.countryVsUser = countryVsUser;
      state.chartDetails.carManufacturer = carManufacturer;
      state.chartDetails.carAge = carAge;
    }
  }
});

export const {
  userData,
  generateUserChartData,
  generateUserData,
  filter,
  filterUserByManufacturer
} = dataSlice.actions;

export default dataSlice.reducer;

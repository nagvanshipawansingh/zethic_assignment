/**
 * Generate data for chart
 * @param {object[]} users collection of user details
 * @returns {object}
 */
export const generateChart = (users) => {
  const filteredUsersInformation = {
    countryVsUser: {},
    carManufacturer: {}
  };

  users.forEach((user) => {
    // Getting Country vs User Data
    if (Boolean(filteredUsersInformation.countryVsUser[user.address.country])) {
      filteredUsersInformation.countryVsUser[user.address.country] += 1;
    } else {
      filteredUsersInformation.countryVsUser[user.address.country] = 1;
    }

    // Getting Car Manufacturer
    if (Boolean(filteredUsersInformation.carManufacturer[user.vehicle.manufacturer])) {
      filteredUsersInformation.carManufacturer[user.vehicle.manufacturer] += 1;
    } else {
      filteredUsersInformation.carManufacturer[user.vehicle.manufacturer] = 1;
    }
  });

  return filteredUsersInformation;
};

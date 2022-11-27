/**
 * Generate data for chart
 * @param {object[]} users collection of user details
 * @returns {object}
 */
export const generateChart = (users) => {
  const filteredUsersInformation = {
    countryVsUser: {},
    carManufacturer: {},
    carAge: {}
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

    // Getting Car Age
    if (Boolean(filteredUsersInformation.carAge[user.vehicle.age])) {
      filteredUsersInformation.carAge[user.vehicle.age] += 1;
    } else {
      filteredUsersInformation.carAge[user.vehicle.age] = 1;
    }
  });

  return filteredUsersInformation;
};

/**
 * Filter user on the basis of there age
 * @param {object[]} users Users Details
 * @param {number} min Minimum Age
 * @param {number} max Maximum Age
 * @returns {object[]}
 */
export const filterUserAge = (users, min, max) => {
  return users.filter((user) => user.age >= min && user.age <= max);
};

export const filterUserManufacturer = (users, manufacturer) => {
  return users.filter((user) => user.vehicle.manufacturer === manufacturer);
};

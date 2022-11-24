/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {number} min Minimum number for random generator
 * @param {number} max Maximum number for random generator
 * @returns {number}
 */
export const getRandomArbitraryNumber = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

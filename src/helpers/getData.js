import { generate } from "./generate-data";

/**
 * Generating n amount of user data 
 * @param {number} dataAmount amount of data to be generated
 * @returns {object[]}
 */
export const getData = (dataAmount = 100) => {
  const data = [];
  for (let index = 0; index < dataAmount; index++) {
    data.push(generate());
    
  }
  return data;

  
};

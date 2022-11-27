import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { getRandomArbitraryNumber } from './randomArbitraryNumber';

const countryList = [
  'India',
  'Russia',
  'Japan',
  'Nepal',
  'Sri Lanka',
  'Maldives',
  'UK',
  'Myanmar',
  'China',
  'USA',
  'Israel',
  'France',
  'Australia'
];

/**
 * Generate data for single user
 * @returns {object}
 */
export const generate = () => ({
  id: uuidv4(),
  username: {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName()
  },
  email: faker.internet.email(),
  age: getRandomArbitraryNumber(20, 90),
  phoneNumber: faker.phone.number(),
  address: {
    street: faker.address.street(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    // Restricting country because chart is unable to showcase the data of users
    // where country list have (195 random selected country's)
    // country: faker.address.country()
    country: faker.helpers.arrayElement(countryList)
  },
  vehicle: {
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    age: getRandomArbitraryNumber(0, 5)
  },
  occupation: {
    title: faker.name.jobTitle(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType()
  }
});

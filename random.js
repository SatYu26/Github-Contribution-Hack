/*
 * @param {integer} min
 * @param {integer} max
 * @return {integer} random
 */
const randomInt = (min, max) => {
  return Math.floor(Math.random() * max + min);
};

exports.randomInt = randomInt;

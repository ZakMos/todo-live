/**
 * Generates a random number in the range between  a minimum and maximoum numbers
 * @param  {number} min The minimum number in our range
 * @param  {number} max The maximum number in our range
 * @return {number}     A random number in range
 */
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

/**
 * Picks a random item in an array
 * @param  {Array} array The array to pick a random item from
 * @return {any}         The random item in the array
 */
export function getRandomFromArray(array){
  return array[getRandomIntInclusive(0, array.length - 1)];
}

export function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

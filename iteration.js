//---forEach() Method---

//--Fruits Section--

//given array - code commented out for next section
/* const fruits = ['apple', 'pear', 'cherry']

//create capitalized fruits array
let capitalizedFruits = []

//iterate over fruits to capitalize fruits and push to newly created array
fruits.forEach((fruit) => {
  //singular
  let capitalizedFruit = fruit.toUpperCase()
  //push to array
  capitalizedFruits.push(capitalizedFruit)
})

//log for posterity's sake
console.log(capitalizedFruits) */

//--Prices Section--

//given prices array - code commented out for next section
/* const prices = [6.75, 3.1, 4.0, 8.12] //total $21.97

//create totalCost
let totalCost = 0

//iterate over prices array to add to totalCost
prices.forEach((price) => {
  totalCost += price
})

//log for posterity's sake
console.log(totalCost) */

//---filter() Method---

//--Names Section--

//given names array - code commented out for next section
/* const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'] // Result: ['Selma', 'Sam', 'Sharon'];

//filter for names beginning with 'S'
//filtering works similar to forEach where it needs an iterable, 'name' to cycle through each name in the array
const sNames = names.filter((name) => {
  //only add to list if the character at index 0 of string is 'S'
  return name.charAt(0) === 'S'
})

console.log(sNames) */

//--Numbers Section--

//given array - code commented out for next section
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //Result: [2, 4, 6, 8, 10]

//filter out even numbers
const evens = numbers.filter((number) => {
  //find if the number is evenly divisible by 2
  return number % 2 === 0
})

console.log(evens) */

//---map() Method---
//map iterates over each element of the array and returns a new value on each element, where filter only does so when criteria is met
//format looks like: arrays.map((array) => {* insert what you want to do here *}) - curly braces optional if single line

/* const strings = ['1', '2', '3', '4', '5']
const number = strings.map((string) => parseInt(string, 10))
console.log(number) */

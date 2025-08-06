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

//fruits.toUpperCase() challenge with map method

//given array - code commented out for next challenge
/* const fruits = ['apple', 'pear', 'cherry']
//map over array into new array
const capitalizedFruits = fruits.map((fruit) => {
  return fruit.toUpperCase()
})
//now only capitalize the first letter of the fruit
const firstCapitalizedFruits = fruits.map((fruit) => {
  //capture first letter and capitalize
  let capitalLetter = fruit.charAt(0).toUpperCase()
  //return string with first index lopped off and replaced by capitalLetter
  return capitalLetter + fruit.substring(1)
})

console.log(firstCapitalizedFruits) */

//take array of numbers and make them prices with currency symbol and two decimal places
//given array - code commented out for next section
/* const prices = [5, 4.23, 6.4, 8.09, 3.2] //Result: Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

const displayPrices = prices.map((price) => {
  //use back ticks to do calculation inside string
  return `$${price.toFixed(2)}`
})

console.log(displayPrices) */

//---.reduce() method
//array.reduce(accumulator, currentValue, initialValue)

/*
---Sum all numbers - numbers = [1, 2, 3, 4]

const total = numbers.reduce((acc, cur) => {
  return acc + cur
})
total = 10

---Create a string from an array - fruits = ['apple', 'pear', 'cherry']

const fruitString = fruits.reduce((acc, fruit) => {
  return acc + ', ' + fruit
})
fruitString = 'apple, pear, 'cherry'

---Always passing a callback function with at least two parameters: accumulator and currentValue
--Can pass in an initial value
*/

//given array - code commented out for next exercise
/* const prices = [6.75, 3.1, 4.0, 8.12] // Total: 21.97

//cur is iterable following index 0, 1, 2, 3
const total = prices.reduce((acc, cur) => {
  return acc + cur
})

console.log(total) */

//find out how many names in an array start with 'G'
//given array - commented out for next section
/* const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'] //Result: 4

//view everything from the second open parenthesis until the closing curly brace as the callback function (first argument) and the 0 afterward as initialValue (second argument)
const gNames = names.reduce((acc, cur) => {
  if (cur.charAt(0) === 'G') {
    acc++
  }
  return acc
}, 0)

console.log(gNames) */

//This seems like a less intuitive method than others for this particular problem.

//---Chaining Array Methods---
//given array - code commented out for next section
//const arr = [1, 2, 3]

/*
const smallerArr = arr.filter((number) => number !== 2)
const incrementedArr = smallerArr.map((number) => number + 1)

console.log(incrementedArr) => [2,4]
*/

//instructor notes that you can chain them to make the code shorter and do more at the same time

/* const smallerArr = arr
  .filter((number) => number !== 2)
  .map((number) => number + 1) */

//console.log(smallerArr) => [2, 4]

//also called method chaining - chained array methods only work when previous method returns an array

//glad VScode auto-formats the code to multiple lines. Reading everything one after the other would eventually give me a headache

//given array
const users = [{ name: 'Samir' }, { name: 'Angela' }, { name: 'Beatrice' }]

//use filter to remove 'Samir' from array
let filteredUsers = users.filter((user) => {
  if (user.name !== 'Samir') {
    return user
  } else {
    return
  }
})

console.log(filteredUsers) // [{name: 'Angela'}, {name: 'Beatrice'}]

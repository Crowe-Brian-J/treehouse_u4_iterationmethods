//---Fruits Section---

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

//---Prices Section---

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

//---Names Section

//given names array
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'] // Result: ['Selma', 'Sam', 'Sharon'];

//filter for names beginning with 'S'
const sNames = names.filter((name) => {
  //only add to list if the character at index 0 of string is 'S'
  return name.charAt(0) === 'S'
})

console.log(sNames)

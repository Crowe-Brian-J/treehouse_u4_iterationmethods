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

//given prices array
const prices = [6.75, 3.1, 4.0, 8.12] //total $21.97

//create totalCost
let totalCost = 0

//iterate over prices array to add to totalCost
prices.forEach((price) => {
  totalCost += price
})

//log for posterity's sake
console.log(totalCost)

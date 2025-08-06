//given array
const fruits = ['apple', 'pear', 'cherry']

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
console.log(capitalizedFruits)

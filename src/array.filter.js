const { notDivisibleBy, scoreBelow,  startsWith} = require('./functions-return-functions')

function onlyOdds(arr){
  return arr.filter(notDivisibleBy(2))
}

function hasBelow30000CareerPoints(arr){
  return arr.filter(scoreBelow(30000))
}

function firstNameStartsWithA(arr){
  return arr.filter(startsWith('A'))
}

module.exports = {
  onlyOdds,
  hasBelow30000CareerPoints,
  firstNameStartsWithA
}
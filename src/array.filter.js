const { notDivisibleBy, scoreBelow,  startsWith} = require('./functions-return-functions')

function onlyOdds(arr){
  const result = []
  for(const value of arr){
    if(value % 2 === 1){
      result.push(value)
    }
  }
  return result
}

function hasBelow30000CareerPoints(arr){
  const result = []
  for(const value of arr){
    if(value.careerPoints < 30000){
      result.push(value)
    }
  }
  return result
}

function firstNameStartsWithA(arr){
  const result = []
  for(const value of arr){
    if(value[0] === 'A'){
      result.push(value)
    }
  }
  return result
}

module.exports = {
  onlyOdds,
  hasBelow30000CareerPoints,
  firstNameStartsWithA
}
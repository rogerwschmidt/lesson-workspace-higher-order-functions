function multiplyBy(multiplier){
  return function(number){
    return multiplier * number
  }
}

function pluckProperty(propertyName){
  return function(object){
    return object[propertyName]
  }
}

function notDivisibleBy(divisor){
  return function(number){
    return number % divisor !== 0
  }
}

function scoreBelow(baselineScore){

}

function startsWith(startingLetter){

}

function groupByProperty(propertyName){
  return function(acc, object){
    if(acc.hasOwnProperty(object[propertyName])){
      acc[object[propertyName]].push(object)
    }
    else{
      acc[object[propertyName]] = [ object ]
    }
    return acc
  }
}


module.exports = {
  multiplyBy,
  pluckProperty,
  notDivisibleBy,
  scoreBelow,
  startsWith,
  groupByProperty
}
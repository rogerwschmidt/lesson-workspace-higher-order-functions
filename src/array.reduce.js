const { groupByProperty } = require('./functions-return-functions')

function sumNumbers(arr){
  return arr.reduce(function(acc, ele){
    return acc + ele
  }, 0)
}

function countLetters(arr){
  return arr.reduce(function(acc, ele){
    if(acc.hasOwnProperty(ele)){
      acc[ele] = acc[ele] + 1
    }
    else{
      acc[ele] = 1
    }
    return acc
  },{})
}

function groupByUniversity(arr){
  return arr.reduce(groupByProperty('university'), {})
}


module.exports = {
  sumNumbers,
  countLetters,
  groupByUniversity
}
const { groupByProperty } = require('./functions-return-functions')

function sumNumbers(arr){
  let result = 0
  for(const value of arr){
    result = result + value
  }

  return result
}

function countLetters(str){
  let result = {}
  for(const value of str){
    if(result.hasOwnProperty(value)){
      result[value] = result[value] + 1
    }
    else{
      result[value] = 1
    }
  }
  return result
}

function groupByUniversity(arr){
  let result = {}
  for(const value of arr){
    if(result.hasOwnProperty(value.university)){
      result[value.university].push(value)
    }
    else {
      result[value.university] = [ value ]
    }
  }

  return result
}


module.exports = {
  sumNumbers,
  countLetters,
  groupByUniversity
}
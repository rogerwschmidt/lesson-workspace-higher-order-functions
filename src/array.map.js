const { pluckProperty, multiplyBy } = require('./functions-return-functions')

function doubleNumbers(arr){
  const result = []
  for(const value of arr){
    result.push(value * 2)
  }
  return result;
}

function pluckName(arr){
  const result = []
  for(const value of arr){
    result.push(value.name)
  }
  return result
}

function mailMerge(arr){
  const result = []
  for(const value of arr){
    const mail = `Dear ${value.firstName} ${value.lastName}, We are contacting you... \n ... Sincerely, ${value.signature}`

    result.push(mail)
  }
  return result
}


module.exports = {
  doubleNumbers,
  pluckName,
  mailMerge
}
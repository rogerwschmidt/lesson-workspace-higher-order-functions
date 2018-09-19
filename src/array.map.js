const { pluckProperty, multiplyBy } = require('./functions-return-functions')

function doubleNumbers(arr){
  return arr.map(multiplyBy(2))
}

function pluckName(arr){
  return arr.map(pluckProperty('name'))
}

function mailMerge(arr){
  return arr.map(function(person){
    return `Dear ${person.firstName} ${person.lastName}, We are contacting you... \n ... Sincerely, ${person.signature}`
  })
}

module.exports = {
  doubleNumbers,
  pluckName,
  mailMerge
}
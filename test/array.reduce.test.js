const { expect } = require('chai')

const {
  sumNumbers,
  countLetters,
  groupByUniversity
} = require('../src/array.reduce')

describe('sumNumbers', function(){
  it('returns 0 if array is empty', function(){
    const numbers = []
    const actual = sumNumbers(numbers)

    const expected = 0

    expect(actual).to.deep.equal(expected)
  })
  it('returns the summation of all the numbers in the array', function(){
    const numbers = [1,2,3,4,5,6]
    const actual = sumNumbers(numbers)

    const expected = 21

    expect(actual).to.deep.equal(expected)
  })
})

describe('countLetters', function(){
  it('returns an empty object if the string is empty', function(){
    const string = []
    const actual = countLetters(string)

    const expected = {}

    expect(actual).to.deep.equal(expected)
  })
  it('returns an object with keys for letters and values for their respective counts', function(){
    const string = ['a','b','c','a','b','c','a','b','c']
    const actual = countLetters(string)

    const expected = { a: 3, b: 3, c: 3}

    expect(actual).to.deep.equal(expected)
  })
})

describe('groupByUniversity', function(){
  it('returns an empty object if the string is empty', function(){
    const persons = []
    const actual = groupByUniversity(persons)

    const expected = {}

    expect(actual).to.deep.equal(expected)
  })
  it('returns and object with all persons grouped by univeristy', function(){
    const persons = [
      {firstName: "Lark", lastName: "Cesconi", university: "Kyrgyz Russian Slavic University" }, 
      { firstName: "Ole", lastName: "Down", university: "Teachers College, Columbia University" }, 
      { firstName: "Janeva", lastName: "Andrewartha", university: "Biola University" }, 
      { firstName: "Antonio", lastName: "Geleman", university: "Teachers College, Columbia University" }, 
      { firstName: "Jephthah", lastName: "Stegers", university: "Kyrgyz Russian Slavic University" }, 
      { firstName: "Nelie", lastName: "Eccersley", university: "University of Eldoret" }, 
      { firstName: "Fidelia", lastName: "Newing", university: "Teachers College, Columbia University" }, 
      { firstName: "Tammie", lastName: "MacAnespie", university: "Biola University" }, 
      { firstName: "Amalie", lastName: "Reyner", university: "Kyrgyz Russian Slavic University" }, 
      { firstName: "Tedd", lastName: "Lockwood", university: "Teachers College, Columbia University" }, 
      { firstName: "Theresina", lastName: "Leverich", university: "University of Southeastern Philippines" }, 
      { firstName: "Eada", lastName: "Burnie", university: "California Institute of the Arts" }, 
      { firstName: "Angie", lastName: "Schild", university: "Biola University" }, 
      { firstName: "Susy", lastName: "Piccard", university: "Universidad del Mar" }, 
      { firstName: "Lucia", lastName: "Forsdike", university: "Kyrgyz Russian Slavic University" }
    ]
    const actual = groupByUniversity(persons)

    const expected = {
      "Biola University": [
        {  firstName: "Janeva",  lastName: "Andrewartha",  university: "Biola University" },
        {  firstName: "Tammie",  lastName: "MacAnespie",  university: "Biola University" },
        {  firstName: "Angie",  lastName: "Schild",  university: "Biola University" },
      ],
      "California Institute of the Arts": [
        {  firstName: "Eada",  lastName: "Burnie",  university: "California Institute of the Arts" }
      ],
      "Kyrgyz Russian Slavic University": [
        {  firstName: "Lark",  lastName: "Cesconi",  university: "Kyrgyz Russian Slavic University" },
        {  firstName: "Jephthah",  lastName: "Stegers",  university: "Kyrgyz Russian Slavic University" },
        {  firstName: "Amalie",  lastName: "Reyner",  university: "Kyrgyz Russian Slavic University" },
        {  firstName: "Lucia",  lastName: "Forsdike",  university: "Kyrgyz Russian Slavic University" },
      ],
      "Teachers College, Columbia University": [
        {  firstName: "Ole",  lastName: "Down",  university: "Teachers College, Columbia University" },
        {  firstName: "Antonio",  lastName: "Geleman",  university: "Teachers College, Columbia University" },
        {  firstName: "Fidelia",  lastName: "Newing",  university: "Teachers College, Columbia University" },
        {  firstName: "Tedd",  lastName: "Lockwood",  university: "Teachers College, Columbia University" },
      ],
      "Universidad del Mar": [
        {  firstName: "Susy",  lastName: "Piccard",  university: "Universidad del Mar" },
      ],
      "University of Eldoret": [
        {  firstName: "Nelie",  lastName: "Eccersley",  university: "University of Eldoret" },
      ],
      "University of Southeastern Philippines": [
        {  firstName: "Theresina",  lastName: "Leverich",  university: "University of Southeastern Philippines" }
      ]
    }

    expect(actual).to.be.deep.equal(expected)
  })
})



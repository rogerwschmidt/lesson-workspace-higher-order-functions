const { expect } = require('chai')

const {
  onlyOdds,
  hasBelow30000CareerPoints,
  firstNameStartsWithA
} = require('../src/array.filter')

describe('onylOdd', function(){
  it('returns an empty array if it receives and empty array', function(){
    const numbers = []
    const actual = onlyOdds(numbers)
    
    const expected = []
    
    expect(actual).to.be.deep.equal(expected)
  })
  it('returns only the odd numbers', function(){
    const numbers = [1,2,3,4,5,6,7,8,9]
    const actual = onlyOdds(numbers)
    
    const expected = [1,3,5,7,9]
    
    expect(actual).to.be.deep.equal(expected)
  })
})

describe('hasOver500CareerPoints', function(){
  it('returns an empty array if it receives and empty array', function(){
    const players = []
    const actual = hasBelow30000CareerPoints(players)
    
    const expected = []
    
    expect(actual).to.be.deep.equal(expected)
  })
  it('returns players with less than 30000 career points', function(){
    const players = [
      { name: "Kareem Abdul-Jabbar", careerPoints: 38387 },
      { name: "Karl Malone", careerPoints: 36928 },
      { name: "Kobe Bryant", careerPoints: 33643 },
      { name: "Michael Jordan", careerPoints: 32292 },
      { name: "Wilt Chamberlain", careerPoints: 31419 },
      { name: "Dirk Nowitzki", careerPoints: 31187 },
      { name: "LeBron James", careerPoints: 31038 },
      { name: "Shaquille O'Neal", careerPoints: 28596 },
      { name: "Moses Malone", careerPoints: 27409 },
      { name: "Elvin Hayes", careerPoints: 27313 }
    ]
    const actual = hasBelow30000CareerPoints(players)
  
    const expected = [
      { name: "Shaquille O'Neal", careerPoints: 28596 },
      { name: "Moses Malone", careerPoints: 27409 },
      { name: "Elvin Hayes", careerPoints: 27313 }
    ]
  
    expect(actual).to.deep.equal(expected)
  })
})

describe('firstNameStartsWithA', function(){
  it('returns an empty array if it receives and empty array', function(){
    const persons = []
    const actual = firstNameStartsWithA(persons)
    
    const expected = []
    
    expect(actual).to.be.deep.equal(expected)
  })
  it('returns an an array with names that start with a', function(){
    const persons = [
      'Addy Royds', 
      'Jillayne Scalia', 
      'Saba Sabater', 
      'Elisabet Kahan', 
      'Amelia Bridell', 
      'Sammy Dinnington', 
      'Claresta Vel', 
      'Shirline Bradford', 
      'Darren Beldom', 
      'Jackie Vaggs'
    ]
    const actual = firstNameStartsWithA(persons)
    
    const expected = [
      'Addy Royds', 
      'Amelia Bridell'
    ]
    
    expect(actual).to.be.deep.equal(expected)
  })
})
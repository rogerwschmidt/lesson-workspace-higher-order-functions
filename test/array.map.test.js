const { expect } = require('chai')

const {
  doubleNumbers,
  pluckName,
  mailMerge
} = require('../src/array.map.js')

describe('double', function(){
  it('returns an empty array if it receives and empty array', function(){
    const numbers = []
    const actual = doubleNumbers(numbers)
    
    const expected = []
    
    expect(actual).to.be.deep.equal(expected)
  })
  it('returns and array with each element doubled', function(){
    const numbers = [1,2,3,4,5]
    const actual = doubleNumbers(numbers)
    
    const expected = [2,4,6,8,10]

    expect(actual).to.be.deep.equal(expected)
  })
})


describe('pluckName', function(){
  it('returns an empty array if it receives and empty array', function(){
    const names = []
    const actual = pluckName(names)
    
    const expected = []

    expect(actual).to.be.deep.equal(expected)
  })
  it('returns an array with only the name property of each object', function(){
    const ghostBusters = [
      {name:'Dr. Peter Venkman', profession: 'Parapsychologist'},
      {name:'Dr. Raymond Stantz', profession: 'Parapsychologist'},
      {name:'Dr. Egon Spengler', profession: 'Parapsychologist'},
      {name:'Winston Zeddmore', profession: 'Everyman'}
    ]
    const actual = pluckName(ghostBusters)

    const expected = ['Dr. Peter Venkman', 'Dr. Raymond Stantz', 'Dr. Egon Spengler', 'Winston Zeddmore']

    expect(actual).to.be.deep.equal(expected)
  })
})

describe('mailMerge', function(){
  it('returns an empty array if it receives and empty array', function(){
    const mailList = []
    const actual = mailMerge(mailList)
    
    const expected = []

    expect(actual).to.be.deep.equal(expected)
  })
  it('returns an array with a filled in template', function(){
    const mailList = [
      { firstName: 'Marty', lastName: 'McFly', signature: 'Rober Zemeckis' },
      { firstName: 'Dr. Emmet', lastName: 'Brown', signature: 'Bob Gale' },
      { firstName: 'Lorraine', lastName: 'Baines', signature: 'Steven Spielberg' }
    ]
    const actual = mailMerge(mailList)

    const expected = [
      'Dear Marty McFly, We are contacting you... \n ... Sincerily, Rober Zemeckis',
      'Dear Dr. Emmet Brown, We are contacting you... \n ... Sincerily, Bob Gale',
      'Dear Lorraine Baines, We are contacting you... \n ... Sincerily, Steven Spielberg' 
    ]

    expect(actual).to.deep.equal(actual)
  })
})
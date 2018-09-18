# Lesson Workspace Higher Order Functions

## Objectives

* Use map to transform an array
* Use filter to transform an array
* Use reduce to accumulate an array
* Use functions that return functions to abstract functionality
* Define higher order functions

## Using this repo

To install

```bash
npm install
```

To run test

```bash
npm test
```

The tests are all passing, refactor the code without breaking the tests/

### How do you use map to transform an array?

In `array.map.js`

* Create a function that transforms each value of the array before it gets pushed into `result`.
* Study the three main functions and determine what the similarities and differences are between them
* Create a function named `map` that abstracts the looping structure, it has as arguments, an array and a function
* Add the `map` function to all main functions
* Refactor using `array.map`, bring in helper functions as anonymous functions

### How do you use filter to transform an array?

In `array.filter.js`

* Create a function that checks to see if each value of the array should be pushed into `result`.
* Study the three main functions and determine what the similarities and differences are between them
* Create a function named `filter` that abstracts the looping structure, it has as arguments, an array and a function
* Add the `filter` function to all main functions
* Refactor using `array.filter`, bring in helper functions as anonymous functions

### How do you use reduce to accumulate an array?

In `array.reduce.js`

* Create a function to transform each element for each function
* Study the three main functions and determine what the similarities and differences are between them
* Create a function named `reduce` that abstracts the looping structure, it has as arguments, an array, a function, and a startign value
* Add `reduce` function to all main functions
* Refactor using `array.reduce`, bring in helper functions as anonymous functions

### How do you use a function that returns a function to abstract functionality?

In `array.map.js`

* From `functions-return-functions` use `multiplyBy` to abstract behavior on `doubleNumbers`
* From `functions-return-functions` use `pluckProperty` to abstract behavior on `pluckName`

In `array.filter.js`

* From `functions-return-functions` use `notDivisibleBy` to abstract behavior on `onlyOdds`
* In `functions-return-functions`, create a function named `scoreBelow` to abstract score number. Use it to abstract behavior in `hasBelow30000CareerPoints`
* In `functions-return-functions`, create a function named `startsWith` to abstract starting letter. Use it to abstract behavior in `firstNameStartsWithA`

In `array.reduce.js`

* rom `functions-return-functions` use `groupByProperty` to abstract behavior on `groupByUniversity`

### What is a higher order function?

* Turn you your neighbor and define what a higher order function is
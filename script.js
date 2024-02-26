// Array Copy Methods
// Instead of mutating an Array these copy methods create a new copy of an Array  
const a = [2, 1, 3]

const b = a.toSorted() // Does the same thing as .sort but does not mutate the Array
const c = a.toReversed() // Does the same thing as .reverse but does not mutate the Array
const d = a.toSpliced(2) // Does the same thing as .splice but does not mutate the Array
const e = a.with(2, 'a') // Allows you to change elements in an Array without mutating the Array

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)


// // Array groupBy Method
const people = [
    { name: 'Kyle', age: 28 },
    { name: 'Sally', age: 28 },
]
// groupBy function using age to create a new object
// Object.groupBy(people, person => {
//     return person.age // Will return a new object groupBy the category
// })

// // // This will be the return if your browser does not support the latest 2024 ES6 update
// { '28': [{ name: 'Kyle', age: 28 },
// { name: 'Sally', age: 28 },]}


// Promise.withResolvers
const oldPromise = new Promise((resolve, reject) => { // Old way of using Promise
    resolve() // Would need to call resolve somewhere inside function
    reject() // Would need to call reject somewhere inside function
})
// Using .withResolvers resolve and reject do not have to be inside function
// Using Promise.withResolvers() function will return an object with promise, resolve, and reject functions inside
// Best used for when you want to create a Promise but do not want to use resolve or reject inside function
// const {promise, resolve, reject} = Promise.withResolvers()
// resolve()
// reject()


// JSON Modules


// Import Attributes


// Decorators


// New Set Methods


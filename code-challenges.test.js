// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { log } = require("console")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe("removeFirstShuffRest", () => {
//   const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
//   // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// ]
//   it("removes the first item from the array and shuffles the remaining items", () => {
//     expect(colors1).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
//     expect(colors2).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//   })
// })

// #### Output Good Fail

// b) Create the function that makes the test pass.

// Pseudo code:
// Name: removeFirstShuffRest, shuffle

// Input: Array
//  Output: Array
//  Process: Create a function with arr passed as a parameter. Remove the first item or character [0] using .shift() and then shuffle the rest of the items by iterating using with a for loop and randomizing using Math.floor and Math.random.

// const shuffle = (arr) => {
//   const removeFirstShuffRest = shuffle(arr)
//   for(let i = arr.length -1; i > 0; i--){
//     const j = Math.floor(Math.random() * i + 1)
//     [arr[i], arr[j]] = [arr[j], arr[i]] 
//   }
//   return arr.spit()
// }
// ### Output passed! (freecodecamp helped too)


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// describe("fullTally", () => {
//   const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31
//   it("returns the end tally", () => {
//     expect(fullTally(votes1)).toEqual(11)
//     expect(fullTally(votes2)).toEqual(-31)
//   })
// })

// #### Good Fail

// b) Create the function that makes the test pass.

// Pseudo code:
//  Name: fullTally, value
//  Input: Object
//  Output: Number
//  Process: create a function that takes in a oject and add the value of the keys of the object using .reduce()


// const fullTally = (obj) => {
//   // const values = Object.values(obj)
//   console.log(obj.upVotes, obj.downVotes);
//   // const sum =  values.reduce((accumulator, value)=>{
//   //   return accumulator + value
//   // }, 0)
  
//   return  obj.upVotes - obj.downVotes
// }

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("combinedArr", () => {
//   const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
//   const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//   // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//   it("returns one array with no duplicate values", () => {
//     expect(combinedArr(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })


// b) Create the function that makes the test pass.

// Pseudo code:
// Name: combinedArr
// Input: Array
// Output: Array
// Process: combining two arrays using the spread operator and then checking for duplicate values and deleting them with Set()

// const combinedArr = (arr1, arr2) => {
// const merged = [...arr1, ...arr2]
// const takeOutDuplicate = [...new Set(merged)]
//   console.log(takeOutDuplicate);
//   return takeOutDuplicate
// }

// Output: passed  (I was console logging to see what was going on)
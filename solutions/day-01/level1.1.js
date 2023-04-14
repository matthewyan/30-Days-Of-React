// Array document: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Declare an empty array;
var arr0 = []

// Declare an array with more than 5 number of elements
var arr = [1, "hi", true, undefined, null]

// Find the length of your array
console.log(arr.length)
console.log(arr)

// Get the first item, the middle item and the last item of the array
console.log([arr[0], arr[2], arr[4]])
console.log(arr.at(0), arr.at(2), arr.at(-1))   // using `at` also works

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
var mixedDataTypes = [1, "hi", true, undefined, null, Symbol(), Date()]
console.log(mixedDataTypes)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
itCompanies.forEach (e => console.log(e))   // e => ***, is a callback

// Change each company name to uppercase one by one and print them out
let itc = itCompanies.map(e => e.toLowerCase())
console.log(itc)

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let end = itCompanies.pop()
let sentence = itCompanies.reduce((prev, e) => prev + ", " + e) + " and " + end + " are big IT companies"
console.log(sentence)

itCompanies.push(end)   // restore itCompanies

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.indexOf('Apple') != -1) {
    console.log('Apple')
} else {
    console.log('company is not found')
}

// Filter out companies which have more than one 'o' without the filter method
let result1 = itCompanies.filter(e => [...e.matchAll(/[oO]/g)].length >= 2);
console.log(result1);

for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index];
    let r = [...element.matchAll(/[oO]/g)]
    if (r.length >= 2) {
        console.log(element)
    }
}

// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))
console.log(itCompanies)

// Slice out the middle IT company or companies from the array
// itCompanies.push('Tencent')
console.log(itCompanies)
let result2 = itCompanies.filter((e, i) => {
    if (Math.floor((itCompanies.length-1) / 2) === i || Math.floor(itCompanies.length / 2) === i) {
        return true;
    }
    return false;
})
console.log(result2)
 
// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array


// Remove the last IT company from the array
// Remove all IT companies
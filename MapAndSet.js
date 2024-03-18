// ! Set method in Javascript

// * Set Create an collection of unique values. Each value can occur only once

// ? Create an empty set
let number = new Set();
// ? also create with value
number = new Set([2, 3, 12, 3, 4]); // * Set(4) { 2, 3, 12, 4 }
//  * 3 occur only one

// * add an item into the set
number.add(5);

// * can be iterate using iterator
// number.forEach((item) => console.log(item));

// * return an object with set values
let iterate = number.values(); // * [Set Iterator] { 2, 3, 12, 4, 5 }

// * delete item from set
number.delete(3);

// * check item in the array or not
let check = number.has(5); // * true
check = number.has(6); // * false

// * return the size of the set
let sz = number.size;

console.log(sz);
console.log(number);

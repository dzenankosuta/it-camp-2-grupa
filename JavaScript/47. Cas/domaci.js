// Domaci:
// 34. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

const nthlargest = (arr, position) => {
  arr.sort((a, b) => b - a);
  return arr[position - 1];
};

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor

// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

const keysToValues = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i <= values.length - 1; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
};
// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(keysToValues(student));
// 3. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const lengthOfObject = (obj) => {
  const length = Object.keys(obj).length;
  return length;
};
console.log(lengthOfObject(student));

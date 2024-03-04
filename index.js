// EXAMPLE 1 - Count the Number of Regex Matches in JavaScript

const str = 'one two one one';

const count = (str.match(/one/g) || []).length;

console.log(count); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Common regular expressions

// // ✅ Any digit 0-9
// const str = '123 hello 123';
// const count = (str.match(/[0-9]/g) || []).length;
// console.log(count); // 👉️ 6

// // ✅ Any Alphanumeric character
// const str2 = '123 hello !@#$%^&';
// const count2 = (str2.match(/[a-zA-Z0-9]/g) || []).length;
// console.log(count2); // 👉️ 8

// // ✅ Any latin letters
// const str3 = 'Hello 123';
// const count3 = (str3.match(/[a-zA-Z]/g) || []).length;
// console.log(count3); // 👉️ 5

// // ✅ Occurrences of a, b or c
// const str4 = 'abc123abc';
// const count4 = (str4.match(/[abc]/g) || []).length;
// console.log(count4); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 3 - Count the Number of Regex Matches using `RegExp.exec()`

// const str = 'one two one one';

// let count = 0;
// const regex = /one/g;

// while (regex.exec(str) !== null) {
//   count += 1;
// }

// console.log(count); // 👉️ 3

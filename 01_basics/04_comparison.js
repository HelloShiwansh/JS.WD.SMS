console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("......");

console.log("2" > 1);
console.log("02" > 1);

console.log("......");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// When comparing null with a number using comparison operators, 
// JavaScript attempts to convert null to a number (which becomes 0).
// The specific output depends on the operator and 
// whether it checks for strict equality or performs type coercion.

console.log("......");

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// When comparing undefined with a number, JavaScript coerces undefined to NaN.
// Any comparison involving NaN always results in false.

// == checks for equality after potential type conversion.
// === checks for strict equality (value and type).
console.log("2" === 2);
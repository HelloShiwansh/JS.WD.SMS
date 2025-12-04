// array

const myArr = [ 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

const arr = new Array([6,7])
// console.log(arr);

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //place the element at the start
myArr.shift() //remove the first element
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(); //arr => string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice does not change the original array
    //1 inclusive, 3 exclusive

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice changes the original array
    // 1 inclusive, 3 inclusive, removes the elements from the original array
console.log("C ", myArr);
console.log(myn2);
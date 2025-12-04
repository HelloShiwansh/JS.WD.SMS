//map
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

//map is different from filter
//map returns a new array after performing some operation on each element of the array
//whereas filter returns a new array after applying some condition on each element of the array
//map does not change the size of the original array
//filter can change the size of the original array

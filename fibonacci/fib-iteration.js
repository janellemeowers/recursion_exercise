//Odin Assignment 1A: Fibonacci Sequence (sums each number before it)
// Write using iteration way first (then 1B with recursion )

//return array with result of that number
function fib(num) {
  let array = [];

  for (let i = 0; i < num; i++) {
    if (i < 2) {
      array.push(i);
    } else {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }

  return array;
}

let answer = fib(8); // [0,1,1,2,3,5,8,13]
let ten = fib(10); //[0,1,1,2,3,5,8,13,21,34]
let one = fib(1); //[0]

console.log(ten);

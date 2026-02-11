// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array) {
  let sum = 0;

  array.forEach(function(element) {
    // adds element value to sum 
    sum += element;
  });
    return sum;
}

// Test for sum array
let testArray = [1, 2, 3, 4, 5]; // 15

console.log(sumArray(testArray));

// TODO: display the sum of the array in the console

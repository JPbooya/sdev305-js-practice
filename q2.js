// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
  let max = array[0];

   array.forEach(function(element) {

    if (element > max) {
      // update
      max = element;
    }
  });
    return max;
}

// Test for find largest
let testArray2 = [1, 4, 5, 4, 3]; // 5

console.log(findLargest(testArray2));

// TODO: display the largest number in the array in the console

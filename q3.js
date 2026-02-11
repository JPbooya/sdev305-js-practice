// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
  let noDupes = [];
  array.forEach(function(element) {
    if (!noDupes.includes(element)) {
      noDupes.push(element);
    }
  });
  return noDupes;
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

console.log(removeDuplicates(testArray3));

// TODO: display the array with duplicates removed in the console

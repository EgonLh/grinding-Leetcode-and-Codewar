function getMissingElement(superImportantArray) {
  superImportantArray.sort();
  console.log(superImportantArray);
  
  for (let index = 0; index <= superImportantArray.length; index++) {
    if (superImportantArray[index] != index) {
      return index;
    }
  }
}
console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));

console.log(getMissingElement([4, 9, 0, 3, 1, 6, 7, 5, 2]));

console.log(getMissingElement([2, 7, 4, 9, 1, 8, 3, 5, 6]));

console.log(getMissingElement([0, 1, 6, 8, 2, 5, 3, 4, 7]));

// best practic
function getMissingElement(superImportantArray) {
    return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
  }
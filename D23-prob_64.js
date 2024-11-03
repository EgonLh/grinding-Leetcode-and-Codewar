function duplicateCount(text) {
  let arr = text.toLowerCase().split("");
  let count = new Set();
  arr.forEach((element) => {
    for (let index = arr.indexOf(element) + 1; index < arr.length; index++) {
      if (element == arr[index]) {
        count.add(element);
      }
    }
  });
  console.log("Count :", count.size);
}
//split them
//use for each to collect

duplicateCount("abcde");
duplicateCount("Indivisibilities");
duplicateCount("aabBcde");

// best practice
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

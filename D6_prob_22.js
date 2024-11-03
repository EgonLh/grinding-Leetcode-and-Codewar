// function towerBuilder(nFloors) {
//     let ans = 1
//     let result = [];
//     for (let i = 0; i < nFloors; i++) {
//         let count = "";
//         for (let j = 0; j < ans; j++) {
//             count += "*";
//         }
//         result.push(count);
//         ans+=2;
//         console.log("ans",ans);
//     }
//     return result;
//   }

  function towerBuilder(nFloors) {
    var finalArray = [];
    var numSpaces = 0;
    for (i = nFloors; i > 0; i--) {
      finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
      numSpaces++;
    }
    return finalArray.reverse();
  }
  console.log(towerBuilder(3));
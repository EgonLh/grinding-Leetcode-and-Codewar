// // function comp(array1, array2){
// //     let a = [];
// //     array1.forEach(element => {
// //             let result = element**2
// // //             for (let i = 0; i < array2.length; i++) {
// // //                if(result == array2[i]){
// // // //                 console.log("result :",result , ":array :",array2[i]);
// // //                 a.push("true")
// // //                 break;
// // //                }else{
                
// // //                }
                
// // //             }
// // console.log(element**2);
// //     });
    
// //   }



//   function comp(array1, array2){
//     if(array1 == null || array2 == null){
//         // console.log(false);
//         return false;
//     }else if(array1.length !== array2.length){
//         return false
//     }
//     let a = [];
//     let count = 0;
//     array1.forEach(element => {
//             let result = element**2;
//            array2.forEach(element2 => {
//             if(result == element2){
//                 // console.log("result :",element);
//                 // console.log("element2 :",element2);
//                 // console.log("true");
//                 count++
//             }
//            })
//     });

//     console.log("Count ,",count);
//     if(count == (array1.length + array2.length)){
//         // console.log("true");
//         return true;
//     }else{
//         // console.log("false");
//         return false
//     }
//   }
// comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])
// comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])
// comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 36100, 25921, 361, 20736, 361])
// comp([],null)



// use functional approach
function comp(array1, array2) {
    if (array1 === null || array2 === null) {
      return false;
    }
    if (array1.length === 0 && array2.length === 0) {
      return true;
    }
    var array1Squared = array1
      .map(function (x) {
        return x * x;
      })
      .sort(function (a, b) {
        return a - b;
      });
    var array2Sorted = array2.sort(function (a, b) {
      return a - b;
    });
    console.log(JSON.stringify(array1Squared));
    console.log(JSON.stringify(array2Sorted));

    return JSON.stringify(array1Squared) === JSON.stringify(array2Sorted);
  }
let a =comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])
console.log("a :",a);
let b = comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 36100, 25921, 361, 20736, 361])
console.log("b :",b);

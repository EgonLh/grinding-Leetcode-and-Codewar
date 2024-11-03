// function findDifference(a, b) {
//     let arr1 = a.reduce((a,b)=>a*b)
//     let arr2 = b.reduce((a,b)=>a*b)
//     console.log(arr1);
//     console.log(arr2);
//     console.log(arr1-arr2);
//   }
const findDifference = (a,b) => a.reduce((a,b)=>a*b) >  b.reduce((a,b)=>a*b) ?  a.reduce((a,b)=>a*b)-b.reduce((a,b)=>a*b):b.reduce((a,b)=>a*b)-a.reduce((a,b)=>a*b)

let result = findDifference([3,2,5],[1,4,4])
console.log(result);
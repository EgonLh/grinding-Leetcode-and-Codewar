// function grow(a){
//     result=1;
//     for(let i=1;i<=a.length;i++){
//         result *= i;
//     }
//     return result;
// }

const grow = (a) => a.reduce((a,b) => a*b);
console.log(grow([1,2,3]));
// function fakeBin(x){
//     console.log([...x].map(x=>x<5?0:1));
// }
const fakeBin = (x) => ([...x].map(x=>x<5?0:1)).join("");
console.log(fakeBin('509'));
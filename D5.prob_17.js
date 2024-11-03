// function digitize(n) {
//     return ((""+n).split("")).reverse()
//   }

const digitize = (n) => (((String(n)).split("")).reverse()).map(x=>Number(x));
let result = digitize("35231");
console.log(result);
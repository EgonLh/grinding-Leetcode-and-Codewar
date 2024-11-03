function oddOrEven(array) {
    return array.reduce((a,b)=>a+b)%2 == 0 ? "even":"odd";
 }
const oddOrEven = (array) => array.length>0?array.reduce((a,b)=>a+b)%2 == 0 ? "even":"odd":"even";

console.log(oddOrEven([0]));
console.log(oddOrEven([1,2,4]));
console.log(oddOrEven([0,-1,-5]));


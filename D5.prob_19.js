function testEven(n) {
    return Math.ceil(n%2) == 0?true:false;
}
const testEven = (n) => Math.ceil(n%2) == 0?true:false;

let a= testEven(2)
console.log(a);
let b= testEven(0.5)
console.log(b);
let c= testEven(-4);
console.log(c);
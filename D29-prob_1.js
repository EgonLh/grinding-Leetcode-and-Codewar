// function squareDigits(num){
//     result = "";
//     arr = (""+num).split("");
//     arr.forEach(element => {
//        result += (Number(element))**2
//     });
    
//     return Number(result);
    
//   }

const squareDigits = (num) => (Number(String(num).split("").map((num)=>{ return Number(num)**2}).reduce((a,b) => String(a)+String(b))));

let  sum = squareDigits(9119);
let  sum1 = squareDigits(765);

console.log(typeof sum1);
// function digPow(n, p){

//     let arr = String(n).split("");
//     let ans = 0;
//     let count = p
//     arr.forEach(a =>{
//         ans += a**p;
//         p++;
//     })
//     result = ((ans/n) < 1)?-1:ans/n;
//     console.log(result);
//   }

const digPow = (n,p)=>{
    let ans = 0;
    (String(n).split("")).forEach(i => {
        ans+= i**p;
        p++;
    })
    return (ans%n != 0)?-1:ans/n;
}

console.log(digPow(92,1));
console.log(digPow(695,2));
console.log(digPow(46288,3));
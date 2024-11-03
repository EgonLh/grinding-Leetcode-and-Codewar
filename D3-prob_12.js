function countBy(x, n) {
    let z = [];
    let sum = 0
    for (let i = z.length; i < n; i++) {
    sum += x;
    z.push(sum)

}
return z;

}
// // refactor
// function countBy(x, n) {
//     var z = [];
//     for (i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

// refactor
// const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
countBy(2,5);
countBy(1,10);

function divisors(integer) {
    let arr = [];
    for (let index = 2; index < integer; index++) {      
        if(integer%index == 0){
            arr.push(index);
        }        
    }
    return arr.length == 0?`${integer} is prime`:arr;
}
// best practice
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
  };
// loop it
// note them
console.log(divisors(25));
console.log(divisors(12));
console.log(divisors(13));



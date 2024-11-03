function findUniq(arr) {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
  }
  
let a = findUniq([ 1, 1, 1, 2, 1, 1 ])
console.log(a);
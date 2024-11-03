function positiveSum(arr) {
let sum=0
  arr.forEach(element => {
    if(element>0){
        sum += element;
    }
  });
  return sum;
}

// const positiveSum = arr => arr.length>0?arr.filter(a=>a>0).reduce((a,b)=>a+b):0;

// best practice
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }
console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));
console.log(positiveSum([]));


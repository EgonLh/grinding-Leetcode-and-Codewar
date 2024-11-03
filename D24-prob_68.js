function squareSum(numbers){
    let sum = 0
    if(numbers.length == 0)
        return 0;
    numbers.forEach(element => {
        sum += element**2;
    });
        return sum
}

console.log(squareSum([1,2]));
console.log(squareSum([]));
console.log(squareSum([3,4,5]));


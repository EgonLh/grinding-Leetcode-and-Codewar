function twoSum(numbers, target) {
   for (let i = 0; i < numbers.length; i++) {
    for (let index = (i+1); index < numbers.length; index++) {
        if(numbers[i]+numbers[index] == target){
            return [i,index];
        }
    }
   }
}
// console.log(twoSum([1,2,3],4));
console.log(twoSum([2,2,3],4));
// console.log(twoSum([2, 3, 1],3));

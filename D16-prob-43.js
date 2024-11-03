// function countPositivesSumNegatives(input) {
//     let neg_sum=0;
//     let post_count=0;
//     if(input==null){
//         return [];
//     }
//     for (let i = 0; i < input.length; i++) {
//         if(input[i]<=0){
//             neg_sum += input[i]
//         }else{
//             post_count++;
//         }
        
//     }
//     return post_count==0&&neg_sum==0?[]:[post_count,neg_sum];
//   }

const countPositivesSumNegatives =(input)=>{
    let neg_sum=0;
    let post_count=0;
    input==null?[]:input.map(a=>a<=0?neg_sum+=a:post_count++);
    return post_count==0 && neg_sum == 0?[]:[post_count,neg_sum];
}

// good practice
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
  console.log(
  countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
  );
  console.log(
    countPositivesSumNegatives([+0,+0])
    );
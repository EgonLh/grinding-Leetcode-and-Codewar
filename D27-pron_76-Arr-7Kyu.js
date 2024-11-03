// function doubleEveryOther(a) {
//     let ans = [];
//     let start = 1;

//     a.forEach(element => {
//         if(start%2 == 0){
            
//             ans.push(element*2)
//         }else{
//             ans.push(element)
//         }
//         start++;
//     });    
//     return ans;
//   }

  const doubleEveryOther = (a) => {
    let ans = [];
    let flag = 1;
    a.forEach(element => {
        ans.push(flag%2==0?element*2:element);
        flag++;
    })
    return ans;
  }

console.log(doubleEveryOther([1,2,3,4]));

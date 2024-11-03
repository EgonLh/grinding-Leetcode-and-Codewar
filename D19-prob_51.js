// // at least 55 years old and have a handicap greater than 7.

// function openOrSenior(data){
//     let arr = [];
//     data.forEach(element => {
//         if(element[0]>=55 && element[1] > 7){
//             arr.push("Senior");
//         }else{
//             arr.push("Open");
//         }
//     });
//     return arr;
//   }

const openOrSenior = (data) => data.map(a=>a[0]>=55 && a[1]>7?"Senior":"Open")
openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]);
openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])
// function wave(str)
// {
//     let arr = str.split("");
//     let ans = [];
//     // console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         if(arr[i] !== " "){
//             let newArr = [...arr];
//             newArr[i] = arr[i].toUpperCase();
//             ans.push(newArr);
//         }
//         // console.log("New Arr: ",newArr);      
//     }
//     let result = [];
//     ans.forEach(element => {
//         summ = element.join("");
//         // console.log("Sum :",summ); 
//         result.push(summ)   
//     });
//     return result;
// }


// let answer = wave('hello');
// console.log("Answer :",answer);

// let newAns = wave('two words');
// console.log(newAns);


// Refactor
function wave(str)
{
    let arr = str.split("");
    let words = [];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== " "){
            let newArr = [...arr];
            newArr[i] = arr[i].toUpperCase();
            words.push(newArr);
        }    
    }
    words.forEach(element => {
        summ = element.join("");
        result.push(summ);   
    });
    return result;
}

let answer = wave('hello');
console.log("Answer :",answer);

let newAns = wave('two words');
console.log(newAns);
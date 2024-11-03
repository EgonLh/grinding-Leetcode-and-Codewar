// var uniqueInOrder=function(iterable){
//     let arr = []
//     let result = [];
//     if(typeof iterable == "string"){
//     arr = iterable.split("");
//     // console.log("String :",arr);
//     }else{
//         arr = iterable;
//     }

//     // console.log("arrary :",arr);
//     for (let i = 0; i < arr.length; i++) {
      

//       if(arr[i] == arr[i+1]){
//         console.log("Same",arr[i]);
//         result.push(arr[i]);
//         i++;
//       }else{
//         console.log("Not Same :",arr[i]);
//         result.push(arr[i])
//       }
//     }
//     console.log("Reuslt :",result);
// }

// uniqueInOrder([1,2,2,3,3]);
// uniqueInOrder('ABBCcAD');


// var uniqueInOrder=function(iterable){
//     let arr = Array.isArray(iterable)?iterable:iterable.split("");
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(result == undefined){
//             result.push(arr[i])
//         }else if(result[result.length-1] !== arr[i])
//         {
//        result.push(arr[i]);

//         }
//     }
//     return result

   
// }

// refactor
const uniqueInOrder = (iterable) => {
    let arr = Array.isArray(iterable)?iterable:iterable.split("");
    let result = [];

    for (let i = 0; i < arr.length; i++) 
    {
        if(result[result.length-1] !== arr[i] || result == undefined)
            {
            result.push(arr[i]);   
            }
    }    
    return result;
}
uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder([1,2,2,3,3]);
uniqueInOrder('ABBCcAD');




// const isPalindrome = (x) =>{
//     let arr = x.split("");
//     let rev_arr = (x.split("")).reverse();
//     console.log(arr);
//     console.log();
//     if(rev_arr.join("") == arr.join("")){
//         console.log("true");
//     }else{
//         console.log("false");
//     }

// }

// const isPalindrome = (x) => ((x.toUpperCase()).split("")).join("") == (((x.toUpperCase()).split("")).reverse()).join("") ? true:false;

// not mine
const isPalindrome = (x) => x.toUpperCase() == (x.toUpperCase().split("").reverse().join(""))?true:false;
let a = isPalindrome("Hello");
console.log(a);
let b = isPalindrome("Bob");
console.log(b);
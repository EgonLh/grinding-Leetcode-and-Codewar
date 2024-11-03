// function removeChar(str){
//     let ans = [...str]
//     ans.shift();
//     console.log(ans.join(""));
    
   
//    };
const removeChar = (str) => {
    let arr = [...str];
    arr.shift();
    arr.pop();
    return arr.join("");
};

// others
// function removeChar(str) {
//     return str.slice(1, -1);
//   }
console.log(removeChar("HEllo"));
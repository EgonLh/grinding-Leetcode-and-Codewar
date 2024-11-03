// function count(string) {
//     let arr = string.split("")
//     let result = {};
//     arr.forEach(element => {
//         if((result[element])){
//             result[element]++;
//         }else{
//             result[element]=1;

//         }
//     });
//     return result

//   }

const count = (string) => {
    let obj = {}
    string.split("").map(x=>!!(obj[x])?obj[x]++:obj[x]=1)
    return obj;

}

count("abb")
count("ab")
count("ABc")
count("AAC")


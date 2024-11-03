// function myLanguages(results) {
//     let values = [];
//     for (const key in results) {
//         if(results[key]>60){
//             values.push(key);
//         }
//     }
//     console.log(values);
    
// }
const myLanguages = (results) =>{
   
    let values = [];
    
    for (const key in results) {
        
        if(results[key]>=60){
            values.push(key);
        }
    }
    return values.sort((a,b)=>results[b]-results[a]);
}

myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65})
myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93})
myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20})

// functional approach
function myLanguages(obj) {
    return Object.keys(obj).filter(i => obj[i] > 59).sort((a, b) => obj[b] - obj[a]);
  }
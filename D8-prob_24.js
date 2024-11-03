// function abbrevName(name){
//     let ans = [];
//     (name.split(" ")).forEach(element => {
//         ans.push(element[0].toUpperCase());
//     });
//     return ans.join('.');

// }

// refactor
const abbrevName = (name) => {
    let ans = [];
    (name.split(" ")).forEach(element=>{
        ans.push(element[0].toUpperCase());
    });
    return ans.join('.')
}

// other people
// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }
abbrevName("patrick feeney")
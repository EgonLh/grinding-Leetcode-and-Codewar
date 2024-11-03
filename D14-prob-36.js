// var capitals = function (word) {
//     let arr = [];
// 	[...word].forEach(a => {
//         if(/[A-Z]/.test(a)){
//             arr.push([...word].indexOf(a))
//         }
       
//     })
//     console.log(arr);
// };

var capitals = (word) =>{
    let arr = [];
    [...word].map(a=>/[A-Z]/.test(a)?arr.push([...word].indexOf(a)):"");
    return arr;
}
// best practice
// const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }
capitals("CodEWaRs");
// function broken(x){
//     let ans = "";
//     (x.split("")).forEach(element => {
//         ans += element=="0"?"1":"0";
//     });
//     console.log(ans);
    
// }

const broken = (x) => {
    let ans = "";
    (x.split("")).forEach(element=>{ans += element=="0"?"1":"0"})
    return ans;
}

// best practice
function broken(x){
    return x.split('').map(a => a == "0" ? "1" : "0").join('');
  }
broken("10000000101101111110011001000")
broken("100010")

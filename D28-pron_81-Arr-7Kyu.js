let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
function getLargerNumbers(a, b) {
    let ans = [];
    for (let i = 0; i < a.length; i++) {
        if(a[i] > b[i]){
            ans.push(a[i])
        }else{
            ans.push(b[i])
        }
        
    }
    return ans;
  }


const getLargerNumbers = (a,b) =>{
    let ans = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push( Math.max( a[i], b[i] ) );
    }
    return ans;
}
console.log(getLargerNumbers(arr1,arr2))


// Thinking
// Check Requirement
// Break Down into Smaller Part
// Smaller To Bigger Problem
// Start Small
//  newArray.push( Math.max( a[i], b[i] ) );
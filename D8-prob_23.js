// function highAndLow(numbers){
//     let ans = [];
//     let arr = (numbers.split(" ")).map(Number);
//     arr.sort((a,b)=>a-b)
//     ans.push(arr[arr.length-1])
//     ans.push(arr[0]);

//     return ans.join(" ");
// }

const highAndLow = (numbers) => {
    let arr = ((numbers.split(" ")).map(Number)).sort((a,b)=>a-b);
    return [arr[arr.length-1],arr[0]].join(" ");
}

// other peopel
// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
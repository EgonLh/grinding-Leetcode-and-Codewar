// function disemvowel(str) {
//     let arr = (str).split(" ");
//     // console.log(arr);
//     let vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     let ans = [];
//     arr.forEach(element => {
//         // console.log([...element]);
//         let word = "";
//         [...element].forEach(a =>{
//             if(!(vowels.includes(a))){
//                 word += String(a);
//             }
//         })
//         ans.push(word);
//     });
//     // console.log(ans.join(" "));
//    return ans.join(" ");
//   }

const disemvowel =(str) =>{
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let ans = [];
    (str.split(" ")).map(a => {
        let word = "";
        [...a].map(x =>{
            !(vowels.includes(x))?word+=String(x):undefined;
        })
        ans.push(word);
    })
    return ans.join(" ");
}


// other people ans
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }
// disemvowel("No offense but,\nYour writing is among the worst I've ever read");
disemvowel("What are you, a communist?")
disemvowel("This website is for losers LOL!")
// function shortcut (string) {
//     let vowel = "aeiou";
//     let ans = "";
//     (string.split("")).forEach(element => {
//         console.log(element);
//         if(vowel.includes(element)){
//             console.log(element);
//         }else{
//             ans += element;
//         }
//     });
//     return ans;
//   }

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }
shortcut('Hello')
shortcut('HELLO')

console.log(shortcut('hello'));

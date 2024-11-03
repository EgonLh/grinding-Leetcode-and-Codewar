function getCount(str) {
    let count = 0
    let vowel = 'aeiou';
    str.split("").map(a=>vowel.includes(a)?count++:undefined);
    console.log(count);
  }

const getCount =  (str) => {
    let count = 0;
    str.split("").map(a=>'aeiou'.includes(a)?count++:null);
    return count;
}

// best practice
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }
getCount('abcc')
getCount('abracadabra')
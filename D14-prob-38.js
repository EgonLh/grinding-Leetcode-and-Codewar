
// const number =(array) =>array.map(a => `${(array.indexOf(a))+1}: ${a}`);

const number =(array)=>{
    let arr = [];
    let a=1;
    array.forEach(element => {
        arr.push(`${a++} : ${element}`);
    });
    return arr;
}
console.log(number(['Y', 's', 'D', 'h', 'X', 'M', 'E', 'w', 'A', 'z', 'Y', 'V', 'W', 'U', 'z', 'H', 'l', 'Z', 'b', 'j', 'L', 'L', 'y', 'u', 'm', 'G', 'O', 'Q', 'D', '{', 'U', 'K', 'U', 'l', 'r', 'X', 'g', 'a', 'X', 'Y', 'K', 't', 'T', 'W', 'A', 'H', 'J', 'W', 'Z', 'N', 'L', 'p', 'e', 'x', 'H', 'N', 'z', '[', 'N', 'o', 'u', 's', 'p', 'k', 'd', 'G', 'q', 'X', 'w', 's', 'z', 'x', 'X', 'f', 'I', 'k', 'p', 'u', 'j', 'k', 'u', 'w', 'w', 'i', '{', 'w', 'Z', 'I', 'V', 'i', 'u', 'H', 'd', 'R', 'g', 'E', 'Y', 'y', 'v', 'l']));


// best practice
// let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)
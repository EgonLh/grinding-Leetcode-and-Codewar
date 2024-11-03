// My Solution
function pigIt(str) {
    let arr = str.split(" ");
    let finalArr = [];
    arr.forEach(element => {
        if (/[a-zA-Z]/.test(element)) {
            let newArr = element.split("");
            let pigLatinStr = "";
            for (let index = 1; index < newArr.length; index++) {
                pigLatinStr += newArr[index];
            }
            pigLatinStr += newArr[0] + "ay";
            finalArr.push(pigLatinStr);
        } else {
            finalArr.push(element);
        }
    });
    return (finalArr.join(" "));
}


// best practice

function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }
  
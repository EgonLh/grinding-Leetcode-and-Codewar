function doubleChar(str) {
    let ans = [];
    (str.split("")).forEach(x => {
        ans.push(x+x);
    })
    return ans.join("");
  }


// use map instead of foreach => refactor
// const doubleChar = (str) => str.split("").map(c => c + c).join("");

doubleChar("String");
doubleChar("1234!_ ");
doubleChar("Hello World")
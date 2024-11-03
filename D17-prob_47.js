function solution(string) {
    return string.replace(/[A-Z]/g, " $&");
  }
// using regex
console.log(solution("camelCasing"));;
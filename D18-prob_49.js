String.prototype.toAlternatingCase = function () {
    return this.split("").map(a=>a == a.toUpperCase()?a.toLowerCase():a.toUpperCase()).join("")
  }
// String.prototype.toAlternatingCase = ()=>this.split("").map(a=>a == a.toUpperCase()?a.toLowerCase():a.toUpperCase()).join("");

console.log("hello world".toAlternatingCase());
console.log("HELLO world".toAlternatingCase());
console.log("123".toAlternatingCase());
console.log("String.prototype.toAlternatingCase".toAlternatingCase());



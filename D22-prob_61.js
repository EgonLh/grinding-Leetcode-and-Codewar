const basicOp = (operation, value1, value2)=> {
    return  operation == '+' ? value1 + value2 :
            operation == '-' ? value1 - value2 :
            operation == '*' ? value1 * value2 :
            operation == '/' ? value1 / value2 : 'Wrong Operation';
  }

console.log(basicOp("+", 4, 7));
console.log(basicOp("/", 49, 7));
console.log(49/7);


const arr2bin = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        if(typeof element == 'number'){    
            console.log(element);
            sum += element; 
        }
    });
    return sum.toString(2);
}

// console.log(arr2bin([1,2,3,4,5]));
console.log(arr2bin([true,true,false,15]));
let test = 15;
console.log(test.toString(2));



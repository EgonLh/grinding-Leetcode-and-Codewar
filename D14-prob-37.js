function removeSmallest(numbers) {
    let newarr  = [];
    let counter = false;
    numbers.forEach(element => {
        if(element == Math.min(...numbers) && counter == false){
            counter = true;
        }else{
            newarr.push(element)
        }
    });
    return newarr;
  }


// best practice
// function removeSmallest(numbers) {
//     let indexOfMin = numbers.indexOf(Math.min(...numbers));
//     return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
//   }
 console.log(removeSmallest([2, 2, 1, 2, 1]));

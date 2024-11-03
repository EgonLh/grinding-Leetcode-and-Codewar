function smallEnough(a, limit){
let result = true;
  a.forEach(element => {
    if(element>limit){
        result = false;
    }
  });
  return result;  
}

const smallEnough = (a,limit) => {
    let result = true;
    a.forEach(element => {
        if(element>limit){
            result = false;
        }
    })
    return result;
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 10));
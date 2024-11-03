function strCount(str, letter){  
   
    let count =0
    str.split("").map(a=>a==letter?count++:undefined);
    console.log(count);
  }

const strCount = (str,letter) =>{
    let count=0;
    str.split("").map(a=>a==letter?count++:undefined);
    return count;
}
  strCount("Hello","l")
function checkThreeAndTwo(array) {
    let a = (array.filter(a=>a=="a")).length;
    let b = (array.filter(a=>a=="b")).length;
    let c = (array.filter(a=>a=="c")).length;
    
    return ((a===3||b===3||c===3)&&(a===2||b===2||c===2))
  }
console.log(
checkThreeAndTwo(["a", "a", "a", "b", "b"]));

// thinking pattern notes

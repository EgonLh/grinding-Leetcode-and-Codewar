function expandedForm(num) {
let arr = (String(num).split("")).map(Number);
Ansarr = []

// let i = 1;
// arr.forEach(a=>{

//     console.log(a);
//     // console.log(a+"0".repeat(arr.length-i));
//     Ansarr.push(Number(a+"0".repeat(arr.length-i)));
//     i++;
// })

for (let i = 1; i < arr.length; i++) {

    arr.forEach(a=>{
        if(a !== 0){
            console.log(a);
            Ansarr.push(Number(a+"0".repeat(arr.length-i)))
        }
        i++;
    })
}
console.log(Ansarr.join("+"));
  }
expandedForm(12)
expandedForm(42)
expandedForm(70304)
expandedForm(100200)
expandedForm(70304)


// others
/*
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");




*/ 

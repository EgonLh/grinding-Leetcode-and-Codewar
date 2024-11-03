// "A" and "T"
// as "C" and "G".

function dnaStrand(dna){
    return (dna.split("")).map(a=>a=="A"?"T":(a=="T")?"A":(a=="G")?"C":(a=="C")?"G":a).join("");
    
  }
const dnaStrand = (dna) => (dna.split("")).map(a=>a=="A"?"T":(a=="T")?"A":(a=="G")?"C":(a=="C")?"G":a).join("");

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
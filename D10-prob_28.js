// function arithmetic(a, b, operator){
//     if(operator == "add"){
//         return a+b
//     }
//     if(operator == "subtract"){
//         return a-b
//     }if(operator == "multiply"){
//         return a*b
//     }if(operator == "divide"){
//         return a/b
//     }
//   }

// mine
const arithmetic = (a,b,operator)=>{
    
    // (condition) ? (true block) : ((condition2) ? (true block2) : (else block2))
    return (operator == "add")?a+b:((operator=="subtract")?a-b:((operator=="multiply")?a*b:((operator=="divide")?a/b:null)));
}
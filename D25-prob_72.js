function sorter(textbooks) {
  textbooks.sort((a, b) => {
    let subjectA = a.toLowerCase();
    let subjectB = b.toLowerCase();
    
    if (subjectA < subjectB) {
      return -1;
    }
    if (subjectA > subjectB) {
      return 1;
    }
    return 0;
  });
}
// textbooks.sort((a, b) => {
//   let subjectA = a.toLowerCase();
//   let subjectB = b.toLowerCase();
  
//   if (subjectA < subjectB) {
//     return -1;
//   }
//   if (subjectA > subjectB) {
//     return 1;
//   }
//   return 0;
// });
console.log(sorter(["Algebra", "History", "Geometry", "English"]));

console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]));
console.log(sorter(["Algebra", "history", "Geometry", "english"]));

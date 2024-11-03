function gimme (triplet) {
  let sorted = [...triplet];
  sorted.sort((a,b)=>a-b);
  return triplet.indexOf(sorted[1]);
}

// others
function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}
console.log(gimme([2, 3, 1]));
console.log(gimme([-2, -3.2, 1]));
console.log(gimme([-5.2, -10.6, 14]));


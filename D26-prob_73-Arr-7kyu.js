function boredom(staff) {
  const score = new Map();
  score.set("accounts", 1);
  score.set("finance", 2);
  score.set("canteen", 10);
  score.set("regulation", 3);
  score.set("trading", 6);
  score.set("change", 6);
  score.set("IS", 8);
  score.set("retail", 5);
  score.set("cleaning", 4);
  score.set("pissing about", 25);

  let sum = 0;
  for (const key in staff) {
    sum += Number(score.get(staff[key]));
  }
  
  if (sum < 80) {
    return "kill me now";
  } else if(sum > 80 && sum < 100) {
    return "i can handle this";
  } else{
    return "party time!!";
  }
}

// boredom({tim: 'change', jim: 'accounts',
//     randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//     laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//     mr: 'finance' });

// boredom({ tim: 'IS', jim: 'finance',
//         randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
//         katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
//         alex: 'regulation', john: 'accounts', mr: 'canteen' })

boredom({
  tim: "accounts",
  jim: "accounts",
  randy: "pissing about",
  sandy: "finance",
  andy: "change",
  katie: "IS",
  laura: "IS",
  saajid: "canteen",
  alex: "pissing about",
  john: "retail",
  mr: "pissing about",
});
// ccounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Best practice
function boredom(staff){
    var map = {
      accounts:1,
      finance:2,
      canteen:10,
      regulation:3,
      trading: 6,
      change:6,
      IS:8,
      retail:5,
      cleaning:4,
      'pissing about':25
    };
    
    var score = Object.keys(staff).reduce(
      function(a,b){       
        return a+map[staff[b]]
     },0); 
    
    return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
 }
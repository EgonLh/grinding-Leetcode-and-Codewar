function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
// fighter1 = new Fighter("Lew", 10, 2)
// fighter2 = new Fighter("Harry", 5, 4)

// fighter1 = new Fighter("Harald", 20, 5);
// fighter2 = new Fighter("Harry", 5, 4);

// function declareWinner(fighter1,fighter2,name) {
//     if(name == fighter1.name){
//         console.log("F1 name:",fighter1.name);
//         while(fighter1.health > 0 || fighter2.health > 0){
//             fighter2.health = fighter2.health - fighter1.damagePerAttack;
//             if(fighter2.health < 0 ){
//             let h2 = fighter2.health;
//             console.log("F2 :",fighter2.health);
//                 return fighter1.name
//                 break;
//             }
//             fighter1.health = fighter1.health - fighter2.damagePerAttack;
//             if(fighter1.health < 0 ){
//             let h1 = fighter1.health;
//             // console.log(fighter1.health);
//             //     console.log("f1 ",fighter1.health);
//             //     return fighter2.name;
//             //     break;
//             }
//         }
//     }else{
//         while(fighter1.health > 0 || fighter2.health > 0){
//             fighter1.health = fighter1.health - fighter2.damagePerAttack;
//             if(fighter1.health < 0 ){
//                 return fighter2.name;
//                 break;
//             }
//             fighter2.health = fighter2.health - fighter1.damagePerAttack;
//             if(fighter2.health < 0 ){
//                 return fighter1.name;
//                 break;
//             }
            
//         }
//     }
// }


// Start - wrong
// function declareWinner(fighter1, fighter2, firstAttacker) {
//     if(firstAttacker == fighter1.name){
//         let h1,h2 = 0;
//         while(fighter1.health>0 || fighter2.health > 0){
//             fighter2.health = fighter2.health - fighter1.damagePerAttack;
//             if(fighter2.health<0){h2 = fighter2.health}
//             fighter1.health = fighter1.health - fighter2.damagePerAttack;
//             if(fighter1.health<0){h1 = fighter1.health}
//         }
//         console.log(h1,h2);
//         if(h1<h2){
//             return fighter2.name;
//         }else{
//             return fighter1.name
//         }
//     }else{
//         let h1,h2 = 0;
//         while(fighter1.health>0 || fighter2.health > 0){
//             fighter1.health = fighter1.health - fighter2.damagePerAttack;
//             if(fighter1.health<0){h1 = fighter1.health}
//             fighter2.health = fighter2.health - fighter1.damagePerAttack;
//             if(fighter2.health<0){h2 = fighter2.health}
//         }
//         if(h1<h2){
//             return fighter2.name;
//         }else{
//             return fighter1.name
//         }
//     }
//   }
// def declare_winner(fighter1, fighter2, first_attacker):
//     fighter1roundsalive = math.ceil(fighter1.health/fighter2.damage_per_attack)
//     fighter2roundsalive = math.ceil(fighter2.health/fighter1.damage_per_attack)
//     if fighter1roundsalive == fighter2roundsalive:
//         return first_attacker
//     else:
//         return fighter1.name if fighter1roundsalive > fighter2roundsalive else fighter2.name

function declare_winner(fighter1,fighter2,firstAttacker){
    fighter1roundsalive = Math.ceil(fighter1.health/fighter2.damagePerAttack)
    fighter2roundsalive = Math.ceil(fighter2.health/fighter1.damagePerAttack);
    if(fighter1roundsalive == fighter2roundsalive){
        return firstAttacker;
    }else{
        return fighter1roundsalive > fighter2roundsalive?fighter1.name:fighter2.name;
    }
}

// Others
function declareWinner(fighter1, fighter2, firstAttacker) {
    var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
    var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
    if(fac1 < fac2) {
      return fighter2.name;
    } else if(fac2 < fac1) {
      return fighter1.name;
    } else {
      return firstAttacker;
    }
  }
fighter1 = new Fighter("Lew", 10, 2);
fighter2 = new Fighter("Harry", 5, 4);
console.log(declareWinner(fighter1,fighter2,"Lew"));
fighter1 = new Fighter("Harald", 20, 5); 
fighter2 =new Fighter("Harry", 5, 4);
console.log(declareWinner(fighter1,fighter2,"Harry"));
fighter1 = new Fighter("Jerry", 30, 3); 
fighter2 =new Fighter("Harald", 20, 5);
console.log(declareWinner(fighter1,fighter2,"Jerry"));
fighter1 = new Fighter("Jerry", 30, 3); 
fighter2 =new Fighter("Harald", 20, 5);
console.log(declareWinner(fighter1,fighter2,"Harald"));




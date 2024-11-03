// function setAlarm(employed, vacation){
//     if(employed && !vacation){
//         return true;
//     }else{
//         return false
//     }
// }

// const setAlarm = (employed,vacation) => (employed && !vacation) ? true :false;
const setAlarm = (employed,vacation) => employed && !vacation;

console.log(setAlarm(true,false));
console.log(setAlarm(false,false));

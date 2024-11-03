   

const betweenExtremes = (numbers) => Math.max(...numbers)-Math.min(...numbers);
console.log(betweenExtremes([-1, -41, -77, -100]));
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
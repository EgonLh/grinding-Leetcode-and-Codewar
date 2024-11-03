var number=function(array){
    //your awesome code here
    // array.forEach(element => {
    //     console.log(``);
    // });

    // array.map(a => `${array.indexOf(a)} : ${a}`);
    console.log(array.map(a => `${(array.indexOf(a))+1} : ${a}`));
    // return 
  }

// const number =(array) =>array.map(a => `${array.indexOf(a)++} : ${a}`);
number(["a","b","c"])
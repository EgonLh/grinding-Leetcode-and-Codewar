function move (position, roll) {
    let [a,b] = [position,roll+roll];
    console.log(a+b);
    return a+b
  }

const move = (position,roll) => position+(roll+roll);
move(0,4);
move(3,6)
function getDivisorsCnt(n){
    let count = 0;
    for (let index = 0; index <= n; index++) {
        if(n%index == 0){
            count++;
        }
    }
    return count;
}

const getDivisorsCnt = (n) => {
    
}

getDivisorsCnt(5)
getDivisorsCnt(12)

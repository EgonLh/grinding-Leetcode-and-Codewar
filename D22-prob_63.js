const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for (let index = begin; index <= end; index+=step) {
        sum += index;
    }
    return sum;
};

sequenceSum(2,6,2)
sequenceSum(1,5,1)
function invert(array) {
   return array.map(item => item>0?Number("-"+item):Number(-(item)));
}

invert([1,2,3,4])
invert([1,2,3,-4])

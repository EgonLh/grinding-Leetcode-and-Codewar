var min = function(list){
    list.sort((a,b)=>a-b)
   
    return list[0];
}

var max = function(list){
    list.sort((a, b) => a - b).reverse();
    
    return list[0];
}


min([-52, 56, 30, 29, -54, 0, -110])
max([4,6,2,1,9,63,-134,566])
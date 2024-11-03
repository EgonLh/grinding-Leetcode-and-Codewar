const longestConsec=(strarr, k)=>{
    let longest = "";
    for (let i = 0; i <= strarr.length-k; i++) {
        let temp = strarr.slice(i,i+k).join("");
        temp.length>longest.length?longest=temp:"";
    }
    return k>0?longest:"";
}

function longestConsec(strarr, k) {
    let longest = "";
    for (let i = 0; i <= strarr.length-k; i++){
        let tempStr = strarr.slice(i, i+k).join("")
        if (tempStr.length > longest.length){
            longest = tempStr
        }
    }
    return k > 0 ? longest : "";
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"],2)
longestConsec(["1", "2", "3", "4", "5", "6"],3)

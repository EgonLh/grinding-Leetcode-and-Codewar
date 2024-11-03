function correct(string)
{
	let arr = string.split('');
    let obj_replact = {
        "5" : "S",
        "0" : "O",
        "1" : "I"
    }
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "5" || arr[i]=="0" || arr[i]=="1"){
            ans.push(obj_replact[arr[i]])
        }else{
           ans.push(arr[i]);
        }
        
    }
    return ans.join("");
}

// not mine
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
// correct("51NGAP0RE");
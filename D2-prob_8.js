function duplicateCount(text){
    let arr = ((text.toLowerCase()).split("")).sort();
    let [startPoint,element_count] = [0,0];
    let duplicated_ele = [];
    arr.forEach(element => {
        startPoint++;
        for (let i = startPoint; i < arr.length; i++) {
            if(element == arr[i] && duplicated_ele.length == 0){
                duplicated_ele.push(arr[i])
            }else if(element == arr[i] && duplicated_ele.length > 0){
                for (let k = 0; k < duplicated_ele.length; k++) {
                    if(duplicated_ele[k] !== arr[i]){
                        duplicated_ele.push(arr[i])
                    }
                }
            }
        }   
    });

    duplicated_ele.forEach(element => {
        for (let i = 0; i < duplicated_ele.length; i++) {
            if(element !== duplicated_ele[i] || duplicated_ele.length == 1){
                element_count++;
            }
            
        }
        
    });
    return element_count;

  }


  duplicateCount("abcde");
  duplicateCount("aabbcde");
  duplicateCount("aabBcde");
  duplicateCount("indivisibility")
  duplicateCount("Indivisibilities")
  duplicateCount("aA11")
  duplicateCount("ABBA")



  function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charCount = {};
    let duplicateCount = 0;

    // Count the occurrences of each character
    for (let char of lowerText) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Count characters that appear more than once
    for (let count in charCount) {
        if (charCount[count] > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}


// from 
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
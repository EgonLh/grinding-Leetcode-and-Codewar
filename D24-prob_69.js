function findNeedle(haystack) {
    let index = '';
    haystack.forEach(element => {
        if(element == "needle"){
            index = "found the needle at position " + haystack.indexOf(element);
        }
        
    });
    return index;
  }
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
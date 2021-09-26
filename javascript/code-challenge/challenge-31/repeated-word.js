'use strict';
const repeatedWord =(string)=>{
    let allWords=string.toLowerCase().split(" ");
    for (let i = 0; i < allWords.length; i++) {
        if (allWords.includes(allWords[i]) && allWords.indexOf(allWords[i]) !== allWords.lastIndexOf(allWords[i]) ) {
            console.log(allWords[i])
            return allWords[i]
            
        }
    };
    return 'No repeated Word'

} 
module.exports=repeatedWord

// 
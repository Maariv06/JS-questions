// reverse "hello world" to "olleh dlrow"

function reverseWord (str) {
    const splitString=str.split(/[ ,]+/);
    let cache="";
    let finalWord="";
    for(let i=0; i<splitString.length; i++) {
        for(let j=0; j<splitString[i].length; j++){
            cache=splitString[i][j]+cache
        }
        finalWord=finalWord+" "+cache;
        cache="";
    }
    return finalWord;
}
console.log(reverseWord("hello world"))
// find first unique character in agiven string

let str="abcdeedba"

let hashtable={};
for(let i=0; i<str.length; i++) {
    if(hashtable[str[i]]) {
          hashtable[str[i]]=hashtable[str[i]]+1;
    }
    else hashtable[str[i]]=1;
}
/* 
for (key in hashtable){
    if(hashtable[key]==1){
        console.log(`answer is ${key}`)
    }
} */

Object.entries(hashtable).forEach(item=> {
    if(item[1]==1){
        console.log(`answer is ${item[0]}`)
    }
})
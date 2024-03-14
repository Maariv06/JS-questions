// write some code to put these numbers in oreder (Ascending & Decending)

var numbers=[3,7,8,2,6,9,11,7,99,0];

// Ascending

let ascending=numbers.sort((a,b)=>{
    return a-b;
})

// decending

let decending=numbers.sort((a,b)=>{
    return b-a;
})
console.log(decending);
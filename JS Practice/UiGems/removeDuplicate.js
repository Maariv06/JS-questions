// write a function to remove duplicates from an array


//method-1
let arr=[1,2,3,4,5,5,4,3,2,1];

function removeDuplicate(arr) {
    let result=[];
    for (let i=0; i<arr.length; i++) {
        if(result.length===0) {
             result.push(arr[i]);
        }
        if(result.indexOf(arr[i])===-1){
             result.push(arr[i])
        }

    }
    return result;
}
console.log(removeDuplicate(arr));

//method-2

let arr1=[1,2,3,4,5,5,4,3,2,1];

function removeDuplicate1(arr) {
 let result={};
 for(let i=0; i<arr.length; i++) {
    result[arr[i]]=1;
 }
 return Object.keys(result).map((val)=>+val)
}
console.log(removeDuplicate1(arr1));

//method-3
let arr2=[1,2,3,4,5,5,4,3,2,1];

function removeDuplicate2(arr) {
    return[...new Set(arr)]
}
console.log(removeDuplicate2(arr2))

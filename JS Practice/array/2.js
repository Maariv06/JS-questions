/*  Take the array and object using the slice method and the for loop method

var array=[1,2,3,4,5]; */

//slice
var array=[1,2,3,4,5];
let result=array.slice(2);
let result1=array.slice(2,4);
console.log(result);
console.log(result1);

//for loop
let array2=[10,20,30,40,50]
let temparray=[];

for(let i=0; i<array.length; i++ ) {
    temparray[i]=array2[i];
    console.log(temparray) ;  
}
console.log(temparray);


// spreadOperator
let temparray1=[...array2];
console.log(temparray1)
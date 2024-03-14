// Empty this array

// Method-1
var array=[1,2,3,4,5];
var array1=array;

array=[];
console.log(array);
console.log(array1);

//Method -2
var array2=[3,5,6,6];
array2.length=0;

console.log(array2);


//Method-3
var array3=[3,5,6,6];
while(array3.length){
   array3.pop();
   console.log(array3)
}
console.log(array3);

//Method-4

let array4=[2,3,2,3];
array4.splice(0,array4.length);
console.log(array4)
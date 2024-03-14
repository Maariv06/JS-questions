// Move zeroes to the end (method-1:without extra space) (method-2:with extra space)
//without space
let arr=[0,0,1,2,0];

function moveZero(arr) {
let slow=0;
for(let fast=0; fast<arr.length; fast++) {
    if(arr[fast]!==0){
        arr[slow]=arr[fast];
        slow++;             
    }   
}
  // console.log(arr);
 while(slow <arr.length){
    arr[slow]=0;
    slow++
} 
return arr;
}
console.log(moveZero(arr))

//with space

let arr1=[0,0,1,2,0];

function moveZero1(arr) {
    let result=[];
    let zeroes=[];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]==0){
            zeroes.push(arr[i])
        }
        else result.push(arr[i])
    }
    return [...result,...zeroes]
}
console.log(moveZero1(arr1))


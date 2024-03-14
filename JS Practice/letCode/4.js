/*  create a function findSum(arr=[],n=number) that takes an integer array and returns two integer elements
that add up to integer n */

//beginner level
 let arr=[6,5,4,3,2,1];
 let resultVal=6;

function twoSum(arr,resultVal) {
    let resultArr=[];
  for (let i=0; i<arr.length; i++) {
    for (let j=i; j<arr.length; j++) {
        if(arr[i]+arr[i+j]==resultVal) {
            resultArr.push([arr[i],arr[i+j]])
        }

    }
  }
  return resultArr;
}
console.log(twoSum(arr,resultVal));

//advanced

function findsum1(arr,resultVal) {
    let cache={};
    let resultArr1=[];
    for(let i=0; i<arr.length; i++){
      if(cache[arr[i]]) {
        resultArr1.push([resultVal-arr[i],arr[i]])
      }
      else {
        cache[resultVal-arr[i]]=true;
      }
      console.log(cache)

    }
    return resultArr1;
}
console.log(findsum1(arr,resultVal))
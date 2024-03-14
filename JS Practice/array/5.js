// How can you check if something is an array
// Method-1
var array=[2,4,6,3,22];
let object={name:"apple",color:"red"};
let string="Mari";
let number =1;

 let result=Array.isArray(array);
 console.log(result);

 //Method-2 (Mostly avoided)
 function checkArray(val) {
 if(typeof val=="string") {
    console.log("it is string")
 }
 else if(typeof val=="number") {
    console.log("it is number")
 }
 else if(typeof val=="object") {
    console.log("it is object")
 }
 else {
    console.log("it is array")
 }
 }
 checkArray(array);
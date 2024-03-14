// check prime or not
/* 
let num=13;
 for (i=2; i<num; i++) {
    if(num%i==0) {
        return console.log("Not prime")
    }
    else return console.log("It is prime")
 } */



// find all prime numbers between two numbers

/* let startval=1;
let endval=125;

for(currentinterval=startval; currentinterval<=endval; currentinterval++) {
    let isPrime=true;
    for(i=2; i<currentinterval; i++) {
        if(currentinterval % i===0) {
            isPrime=false;
            break;
        }
    }
    if(isPrime) 
        console.log(currentinterval)
    
} */

let startval=1;
let endval=125;

for(currentinterval=startval; currentinterval<=endval; currentinterval++){
    let isPrime=true;
    for(i=2; i<currentinterval; i++){
        if (currentinterval%i==0) {
            isPrime=false;
            break;
        }
    }
    if(isPrime) {
        console.log(currentinterval);
    }
}
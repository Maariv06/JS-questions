// useMemo react hook concept
/* 
function sum(a,b) {
     console.log(`calculating the sum of ${a} and ${b}`)
    return a+b
   
}

function useMemo (func) {
    const cache={};
    return function (a,b) {
    const key=a+" "+b;
    if(cache[key]) {
        return cache[key]
    }
    else  {
        cache[key]=func(a,b)
        return cache[key]
    }
    }

}
const hook=useMemo(sum)

console.log(hook(1,2));
console.log(hook(3,4));
console.log(hook(1,2));
console.log(hook(3,4)); */


function sum(a,b) {
    console.log(`calculating the sum of ${a} and ${b}`)
    return a+b
}

function memoizedfunction (func) {
   const cache={};
   return function (a,b) {
    const key=a+""+b;
    if(cache[key]) {
        console.log(`result from cache`)
        return cache[key]
    }
    else {
        cache[key]=func (a,b)
        return cache[key]
    }
   }
}
const useMemo =memoizedfunction(sum);

console.log(useMemo(1,2));
console.log(useMemo(3,4));
console.log(useMemo(1,2));
console.log(useMemo(3,4));
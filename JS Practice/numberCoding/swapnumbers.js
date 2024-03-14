// swap two values with two variables only


//Method-1 (array destructuring)
let num1=10;
let num2=20;

[num1,num2]=[num2,num1]
console.log(num1);
console.log(num2);

// method-2 (add and sub)
a=10;
b=20;
a=a+b; //a=30
b=a-b; //b=10
a=a-b; //a=20
console.log(a);
console.log(b);

//method-3 (XOR operation)

c=40;
d=50;

 c=c^d; //26
 d=c^d;//40
 c=c^d; //50

 console.log(c);
console.log(d);

//method-4 (* and /)

e=40;
f=80;
 
e=e*f;
f=e/f;
e=e/f;

 console.log(e);
console.log(f);

//method-5 (formula)

g=430;
h=540;
 
g=h-g+(h=g)

 console.log(g);
console.log(h);
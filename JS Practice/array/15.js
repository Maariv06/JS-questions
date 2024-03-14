// What are the results of these splice and slice methods 

var a = ["zero", "one", "two", "three"];
var names = ["jason", "john", "peter", "karen","mari"];

var sliced = a.slice(1, 3);
console.log(sliced);
console.log(a);

var spliced = names.splice(1, 3);
console.log(spliced);
console.log(names);
//find given string is palindrome
// method-1

/* let str1="madam";
let str2="sir";
function palindrome(val) {
    if (val===val.split("").reverse("").join("")){
        return true;
    }
    else return false;
}
console.log(palindrome(str2)) */

//method-2

let str1="madam";
let str2="sir";
function palindrome(val) {
    /* let x=str2.split("");
    let y=x.reverse("");
    let z=y.join("");
    console.log(x)
    console.log(y)
    console.log(z) */
  return  val===val.split("").reverse("").join("")
}
console.log(palindrome(str2))




/* function leapYear(year) {
    return (year%100==0) ?(year%400==0):(year%4==0)
   
 }
console.log(leapYear(2017));
 console.log(leapYear(2016));
console.log(leapYear(2023));  */

/* function leapYear (year) {
if(year%4==0) {
    if(year%100==0) {
        if(year%400==0) {
            return console.log("leap year")
        }
        else return console.log("not a leap year")
    }
    else return console.log("leap year")
}
else return console.log(" not a leap year")
}
leapYear(2029); */

function leapYear(year) {
    const a=(year%100==0) ?(year%400==0):(year%4==0);
    
        if(a==true) {
      console.log("leap year")
        }
        else console.log("not a leap year")

}
leapYear(2029)
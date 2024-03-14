// Write a function to check if milk exists in your array
//method-1
var items=["milk","bread","biscuit","sugar"];

function checkProduct() {
    if(items.indexOf("milk")==-1){
        console.log("item does not exist")
    }
    else {console.log("item exist")}
}
checkProduct();

//method-2
var items1=["milk","bread","biscuit","sugar"];

function checkProduct1(val) {
    if(items1.indexOf(val)==-1){
        console.log("item does not exist")
    }
    else {console.log("item exist")}
}
checkProduct1("bread");
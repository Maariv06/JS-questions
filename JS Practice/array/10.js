// Now you have found milk exists add some code to find the index of milk and remove that item

var items=["milk","bread","biscuit","sugar"];

function checkProduct(val) {
    let index=items.indexOf(val);
    if(items.indexOf(val)==-1){
        console.log("item does not exist")
    }
    else {
        items.splice(index,1);
        console.log("item exist");
        console.log(index)
    }
}
checkProduct("milk");
// what is the output of these function (tricky questions)



function tricky () {
    for(var i=0; i<5; i++){
        setTimeout(()=>{
            console.log(i);
        },0);
        
    }
}
tricky();  //ans:5 5 5 5 5

function tricky1 () {
    for(let i=0; i<5; i++){
        setTimeout(()=>{
            console.log(i);
        },0);
        
    }
}
tricky1();  //ans:0 1 2 3 4
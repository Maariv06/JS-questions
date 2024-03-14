// Flatten this array to one single array using reduce

var array = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
    
  let result=array.reduce((a,b)=>{
  return a.concat(b);
  },[]);
  console.log(result);
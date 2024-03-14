// Filter this array to return just the dogs

var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
  ];


  let result=animals.filter((val)=>{
    return val.species== "dog";
  });
  console.log(result);
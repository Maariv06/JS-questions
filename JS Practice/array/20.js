// Using array  use map function to return all the species. 


var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
  ];


  let result=animals.map((val)=>{
    return val.species;
  });
  console.log(result);
// object literals

cricketerDetails ={
    details:[
        {
            name:"sachin",
            type:"allrounder",
            age:45,
            country:"india"
        },
        {
            name:"virat",
            type:"batter",
            age:35,
            country:"india"
        },
        {
            name:"dhoni",
            type:"keeper",
            age:40,
            country:"india"
        },
        {
            name:"rahul",
            type:"allrounder",
            age:32,
            country:"india"
        },
        {
            name:"bumrah",
            type:"bowler",
            age:28,
            country:"india"
        }
    ],
    printCricketerDetails: function(sortType) {
        if(sortType=="age") {
            return this.details.sort((a,b)=>a.age-b.age)
        }
        else {
            return this.details.sort((a,b)=>{
                if(a.name>b.name) {
                    return 1
                }
                else if (a.name<b.name) {
                    return -1
                }
                else return 0

            })
            }
        }
    }


console.log(cricketerDetails.printCricketerDetails("name"))
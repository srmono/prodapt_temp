//var i = 0;
// while loop
// while (i <= 10) {
//     //while loop body
//     console.log("i value is : ",i);
//     i++;
// }
// do while 
// do {
//     console.log("i value is : ",i);
//     i++;
// } while (i <= 10);
// for 
// for (var i = 0; i <= 10; i++) {
//     console.log("i value is : ",i)
// }
// console.time("brands")
var brands = ["poco", "lenovo", "mi", "oneplus", "motorols"];
// //brands[0]
// var brandsLength =  brands.length;
// for(var i = 0; i < brandsLength; i++){
//     console.log("Brand name is : ",brands[i] )
// }
// console.timeEnd("brands")

// for of 
// for (brand of brands) {
//     console.log(brand)
// }
// for in 
// for (brand in brands) {
//     console.log(brands[brand])
// }

var person = {
    name: "venkat",
    age: 45,
    email: "bvsrao91@gmail.com"
}

// for(prop in person){
//     console.log(prop, person[prop])
// }

var persons = [
    {
        name: "venkat",
        age: 45,
        email: "bvsrao91@gmail.com"
    },
    {
        name: "vsr",
        age: 54,
        email: "bvsrao@gmail.com"
    }
]

// for (person of persons){
//     console.log(person.name)
//     console.log(person.age)
//     console.log(person.email)
// }

// for (person of persons){
//     console.log("Name: ", person.name)
//     console.log("Age: ", person.age)
//     console.log("Email ", person.email)
// }
for (person of persons){
    for(key in person){
        console.log(key, person[key])
    }
}

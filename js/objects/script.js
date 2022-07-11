// var name = "venkat";
//name = ""
// var email = "bvsrao91@gmail.com";

// function getName(){
//     return name;
// }

//Singleton pattern
// var person = {
//     name: "venkat",
//     email: "bvsrao91@gmail.com",

//     getName: function(){
//         return this.name
//     },
//     getEmail: function(){
//         return this.email
//     },
//     setName: function(name){
//         this.name = name
//     }
// }

// person.prof = "Training";
// person.setProfession = function(prof){
//     this.prof = prof;
// }

//person.name = "newName"

// Constructor pattern

function Laptop(brand, ram){
    this.brand = brand;
    this.ram = ram;

    this.getBrand = function(){
        return this.brand
    }
}
Laptop.prototype.os = "dos";
let laptop1 = new Laptop("Lenovo", "16gb");
//laptop1.newProp = "";
//laptop1.os ="dos";
let laptop2 = new Laptop("HP", "32gb");
//laptop2.os ="dos";

// var name = new String("venkat")
// var arr = new Array();

//prototype pattern




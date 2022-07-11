//single line comment
//alert("Welcome to JavaScript");

/* multi line comment
alert("Welcome to JavaScript");
alert("Welcome to JavaScript");
alert("Welcome to JavaScript");
alert("Welcome to JavaScript");*/

//Primitive data types

// String  "Java Script" 
// Number  12000.98/ 40
// Boolean true/false
undefined 
null 

//name -> identifier (all variable names)
//var is keyword to declare any variable
var name = "Java Script";
name = "JS";
var price = 90;

//variable naming conventions
// var 8name = ""; //not correct
// var first name = "";//not correct
// var first_name = "";
// var _name = '';
// var name8 = "";
// var firstName = "";
// var $name = "";
// var @name = ''; // not correct


//alert(name);
//console.log(name);

//declare multiple variables
var brand, price, category;

// run in the console
// brand 
// undefined
// brands 
// VM4061:1 Uncaught ReferenceError: brands is not defined
//     at <anonymous>:1:1

brand = "Lenovo";

category = null;
//variable names are case sensitive;
var NAME = "VENKAT";

var fristName = "BVS";
var secondName = "Rao";
//var fullName = fristName + " " + secondName;

//template literals
var fullName = `Welcome ${fristName} ${secondName}`;

//Complex data types

//Arrays

var students = ["venkat", {name: "venkat"}, 90, null, fullName, [1, 2, 4, [34,67] ]];
console.log(students[1].name);
// Object
var dog = {
    color: "goldenBrown",
    price: 20000,
    activities: ["play","barks", "eats"],
    address: {
        city: "bangalore",
        met: function(){}
    },
    height: "2feet",
    runs: function(){
        console.log("Dog Runs")
    },
    eats: function(){
        console.log("Dog eat's")
    }
}

//objectname.propertyname
console.log(dog.color)

//functions
function fn(){
    var lang = "English";
    console.log(lang);
}

// fn()
function cook(param1, param2, param3){
    var result = `By using ${param1} and ${param2} and ${param3} I made recipe, take it`;
    return result;
}

function sum(a,b){
    return a + b;
}

sum(20,30)
// var name = "venkat";
// var name = "lkjlj";

// let lang = "Javascript";
// //let lang = "jjlj"
// const data = "english";

// const menu = ["home", "about"]

// menu.push("services")

// //menu = {}

// function welcome(){
//     console.log("wlecome to arrow function")
// }

// let welcome = ()=>{
//     console.log("welcome to arrow function")
// }

//let welcome = () => console.log("welcome to arrow function")
// let welcome = () =>  "welcome to arrow function"

// let sum = (a, b) =>  a + b;

// let greet = name => `welcome to ${name}`;

//welcome()

//rest and spread operator

//var nums = [12,45,38,923,98]

//REST operator
function sum(...data){
    var total = 0;

    for(price of data){
        total += price
    }

    return total;
}

//Spread operator
//Math.max(...nums)

//template literals

//Destructuring 

var nums = [12,45,38,923,98]

//let [a, b] = nums;

let [a, ...b] = nums;


var person = {
    name: "venkat",
    email: "bvsrao91@gmail.com"
}

var {name : fname, email} = person

console.log(fname)
console.log(email)


















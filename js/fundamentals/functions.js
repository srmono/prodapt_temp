var a = 10;
//Delare the function
// function fn(){
//     console.log("this is a afunction")
// }
//call the function
// fn()

//return from function
// function fn(){
//     return "this is a function";
// }

// console.log(fn())

//passing params to the function

function sum(a, b) {
  var total = a + b;
  return total;
}

//sum(34,10,20,)//passing additional args will be ignored
//sum(10);//returns NaN
// calling function without "()"
// sum
// ƒ sum(a, b){
//     var total = a + b;
//     return total;
// }
// var x = sum;
// undefined
// x(10,23)
// 33

//passing n number of arguments using bultin "arguments" array inside the function
var cart = [
  {
    productId: 1,
    brand: "mi",
    price: 12000,
    qty: 2,
  },
  {
    productId: 2,
    brand: "lenovo",
    price: 21000,
    qty: 1,
  },
  {
    productId: 3,
    brand: "Samsung",
    price: 25000,
    qty: 4,
  }
];

function getCartTotal(data) {
  var total = 0;
  for (product of data) {
    var itotal = 0;
    itotal = product.price * product.qty;
    console.log("quantity=", product.qty, "total amount=", itotal);
    total += product.price * product.qty;
  }
  //console.log("total amount=", total);
  return total;
}

getcart(cart)(
  // function getCartTotal(){
  //     //console.log(arguments)
  //     var total = 0;

  //     for(price of arguments){
  //         total += price
  //     }

  //     return total;
  // }

  //hoisting
  // welcome()
  // function welcome(){
  //     console.log("welcome function")
  // }

  // //declare function in literal way
  // var greet = function(){
  //     console.log("greet function")
  // }
  // greet()

  function (name) {
    console.log(name, "self invoking function");
  }
)("venkat");

function welcome() {
  return "welcome";
  //console.log("this is the next line")
}

//document object
//create div element and store in a variable
var divEl = document.createElement("div");

//add div to body
document.body.appendChild(divEl);

//create text node
var textEl = document.createTextNode("some text");

//add text node to div element
divEl.appendChild(textEl);

//add attribute
divEl.setAttribute("id","test");

//read or get element by id or class
var getById = document.getElementById("test");
//document.getElementsByClassName("test");

//remove elements
//document.getElementById("test").remove();
//getById.remove()

//console.log(getById.innerText)
console.log(getById.innerHTML);

//getById.innerHTML = "new data";

var name = "venkat";
getById.innerHTML = "<p>welcome to "+name +" </p>";
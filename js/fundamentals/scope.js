var a = 10;// Global variables

function sumTen(){
    var b = 20; //private variables
    //b = 20; //without var keyword it is global
    return a + b
}
sumTen()
//console.log(b)

//Lexical scope

var name = "venkat";

// function parent(){

//     var x = 20;

//     function child(){
//         return x + 20;
//     }

//     return child()
// }



function parent(x){
    //var x = 0;
    //var y = 20;

    function child(y){
        return x + y;
    }

    return child
}

var calc = parent(0)
calc(9)
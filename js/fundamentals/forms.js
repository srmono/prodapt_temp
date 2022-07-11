var loginform = document.getElementById("loginForm");

// {
//     uname: "venkat",
//     password: "797979"
// }

loginform.addEventListener("submit", function(e){
    e.preventDefault();
    //var uservalue = document.getElementById("username").value;
    // var uservalue = document.getElementById("username");
    // console.log(uservalue.value)
    //console.log(loginform.elements['username'].value)

    var username = loginform.elements['username'].value;
    // if(username.length < 6){
    //     console.log("username must be 6 characters")
    //     return null;
    // }
    var password = loginform.elements['password'].value;

    // var logingData = {
    //     uname: username,
    //     password: password
    // }
    var loginData = {
        username,
        password
    }
    console.log(JSON.stringify(loginData))
})

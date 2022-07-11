// var users = [
//     {name:"venkat", email:"bvs@gmail.com", company: "prodapt"},
//     {name:"bvsrao", email:"test@gmail.com", company: "prodapt"}
// ]
// var promise = new Promise(function(resolve, reject){
//     try {
//         resolve(users)
//     } catch (error) {
//         reject(error)
//     }
// });
var url = "data.json";
var api = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
    .then( res => res.json() )
    .then((data) => {
            displayUsersGrid(data)
        })
    .catch((err) => console.log(err))

// promise
//     .then((res) => {
//         displayUsersGrid(res)
//     })
//     .catch((err) => console.log(err))

function displayUsersGrid(users){
    //dom operations
    let usersEl = document.getElementById("users");
    let output = "";
    for(user of users){
        output += `<div>
            <div>${user.name}</div>
            <div>${user.email}</div>
        </div>`
    }
    usersEl.innerHTML=output;
}
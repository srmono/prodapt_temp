//api
var api = "https://jsonplaceholder.typicode.com/posts";

//call api with fetch
fetch(api)
    .then(res => res.json())
    .then( data => displayPosts(data))
    .catch(err => console.log(err))

function displayPosts(posts){
    let postEl = document.getElementById("posts");
    var output = "";
    for (post of posts){
        output += `<a target="_blank" href="./postdetails/index.html?id=${post.id}">
            <div class="post">
                <div>${post.title}</div>
                <p>${post.title}</p>
            </div>
        </a>`
    }
    postEl.innerHTML= output;
}

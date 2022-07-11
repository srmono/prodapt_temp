let form = document.getElementById("postForm")

var api_url = "https://jsonplaceholder.typicode.com/posts";

form.addEventListener("submit", async function(e){
    e.preventDefault();

    var userId = form.elements["userId"].value;
    var title = form.elements["title"].value;
    var body = form.elements["body"].value;

    let formData = {
        userId,
        title,
        body
    }

    const response = await fetch(api_url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
    })

    console.log(await response.json())
})



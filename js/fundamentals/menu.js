var btn = document.getElementById("btn");
var navItems = ["home", "about", "service","faq", "contact"];

function generateMenu(data){
    var navEl = document.getElementById("menu");
    var output = "<ul>";
    for(navItem of data){
        //console.log(navItem)
        output += `<li><a href="${navItem}.html">${navItem}</a></li>`
    }
    output += "</ul>"
    console.log(output)
    navEl.innerHTML=output;
}

function createMenu(){
    generateMenu(navItems)
}

btn.addEventListener("click", createMenu);








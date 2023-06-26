const path = "/users/download/index.html"

function isHtml(path){
    return (path.endsWith(".html"));
}


console.log(isHtml(path))
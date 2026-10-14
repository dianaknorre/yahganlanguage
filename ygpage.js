let urlString = window.location.href
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
for (let pair of queryString.entries()) {
   console.log("Key is: " + pair[0]);
   console.log("Value is: " + pair[1]);
}
fetch("yagan.json")
    .then(response => response.json())
function displaypage(id) {
    document.getElementById("title").innerhtml = response[id].title;
    document.getElementById("lastname").innerhtml = response[id].author.family;
    document.getElementById("firstname").innerhtml = response[id].author.given;
    document.getElementById("lang").innerhtml = response[id].language;
    document.getElementById("date").innerhtml = response[id].issued.date-parts[0][0];
    document.getElementById("publisher").innerhtml = response[id].title;
    document.getElementById("place").innerhtml = response[id].publisher-place;
    document.getElementById("url").innerhtml = response[id].URL;
}

document.addEventListener("DOMContentLoaded", displaypage(pair[1]))

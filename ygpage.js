var pageid = URLSearchParams.get()

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

document.addEventListener("DOMContentLoaded", displaypage(pageid)
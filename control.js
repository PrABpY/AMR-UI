let link = window.location.href;
const ip = link.split(":");
document.getElementById("demo").innerHTML = "http:"+ip[1]+':80/home'
function back() {
    location.href = "main.html";
}
function forward() {
    const url = "http:"+'172.25.106.94'+':5000/forward'
    // const url = "http://172.25.106.94:5000/forward"
    fetch(url)
}
function backward() {
    const url = "http:"+'172.25.106.94'+':5000/backward'
    // const url = "http://172.25.106.94:5000/backward"
    fetch(url)
}
function turn_left() {
    const url = "http:"+'172.25.106.94'+':5000/turnleft'
    // const url = "http://172.25.106.94:5000/turnleft"
    fetch(url)
}
function turn_right() {
    const url = "http:"+'172.25.106.94'+':5000/turnright'
    // const url = "http://172.25.106.94:5000/turnright"
    fetch(url)
}
function stop() {
    const url = "http:"+'172.25.106.94'+':5000/stop'
    // const url = "http://172.25.106.94:5000/stop"
    fetch(url)
}
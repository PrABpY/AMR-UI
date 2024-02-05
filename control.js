let link = window.location.href;
const ip = link.split(":");
document.getElementById("demo").innerHTML = "http:"+ip[1]+':80/home'
function back() {
    location.href = "main.html";
}
function forward() {
    const url = "http:"+ip[1]+':80/forward'
    fetch(url)
}
function backward() {
    const url = "http:"+ip[1]+':80/backward'
    fetch(url)
}
function turn_left() {
    const url = "http:"+ip[1]+':80/turnleft'
    fetch(url)
}
function turn_right() {
    const url = "http:"+ip[1]+':80/turnright'
    fetch(url)
}
function stop() {
    const url = "http:"+ip[1]+':80/stop'
    fetch(url)
}
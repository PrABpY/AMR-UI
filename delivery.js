let link = window.location.href;
const ip = link.split(":");
function back() {
    const url = "http:"+ip[1]+':80/lock'
    fetch(url)
    // location.href = "main.html";
    }
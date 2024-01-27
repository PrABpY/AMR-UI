let text;
let userpinlock = 0;
let ip = "http://192.168.72.154";
if (userpinlock == 0) {
    document.getElementById("myImg").src = "image/lock.png";
    document.getElementById("bimg").src = "image/block.png";
}
function getHello() {
    if (userpinlock == 1) {
        const url = ip+':80/home'
        location.href = "lock.html";
        fetch(url, {headers: new Headers({"ngrok-skip-browser-warning": "69420",})})
        .then(response => response.text())  
        .then(text => {
            console.log(text);
            document.getElementById("demo").innerHTML = text
        })
    }
    if (userpinlock == 0) {
        let person = prompt("Please enter your PIN:");
        if (person == "12345") {
            location.href = "lock.html";
        } 
    }
    
}
function getHello_2() {
    const url = ip+':80/hello'
    fetch(url, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    })
    .then(response => response.json())  
    .then(json => {
        console.log(json);
        document.getElementById("demo").innerHTML = JSON.stringify(json)
    })
}
function test() {
    let i = 0;
    while (i < 500) {
      const url = ip+':80/test'
      fetch(url)
      i++;
    }
    
}
function button_pin() {
  if (userpinlock == 0){
      let person = prompt("Please enter your PIN:");
      if (person == "12345") {
        document.getElementById("myImg").src = "image/unlock.png";
        document.getElementById("bimg").src = "image/bunlock.png";
        userpinlock = 1;
      } else {
        document.getElementById("myImg").src = "image/lock.png";
        document.getElementById("bimg").src = "image/block.png";
      }
}
}



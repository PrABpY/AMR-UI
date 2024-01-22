let text;
let userpinlock = 0;
if (userpinlock == 0) {
    text = "Lock"
    document.getElementById("demo").innerHTML = text;
}
function getHello() {
    if (userpinlock == 1) {
        const url = 'http://192.168.232.154:80/home'
        location.href = "http://192.168.232.154:8989/AMR-UI/lock.html";
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
            location.href = "http://192.168.232.154:8989/AMR-UI/lock.html";
        } 
    }
    
}
function getHello_2() {
    const url = 'http://192.168.232.154:80/hello'
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
      const url = 'http://192.168.232.154:80/test'
      fetch(url)
      i++;
    }
    
}
function button_pin() {
  let person = prompt("Please enter your PIN:");
  if (person == "12345") {
    text = "Unlock";
    userpinlock = 1;
  } else {
    text = "Lock";
  }
  document.getElementById("demo").innerHTML = text;
}



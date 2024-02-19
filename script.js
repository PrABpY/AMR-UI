let text;
let userpinlock = 0;
let link = window.location.href;
let pin = "123"
const ip = link.split(":");
// document.getElementById("demo").innerHTML = "http:"+ip[1]+':80/home'
// document.getElementById("bimg").src = "image/block.png";
if (userpinlock == 0) {
    document.getElementById("myImg").src = "image/lock.png";
    document.getElementById("bimg").src = "image/block.png";
}

function to_delivery() {
    location.href = "delivery.html";
}

function to_guide() {
    location.href = "guide.html";
}

function to_control() {
    location.href = "control.html"
}

function control() {
    if (userpinlock == 1) {
        setTimeout(to_control, 500);
    }
    if (userpinlock == 0) {
        let person = prompt("Please enter your PIN:");
        if (person == pin) {
            userpinlock = 1
            document.getElementById("bimg").src = "image/bunlock.png";
            setTimeout(to_control, 500);
        } 
    }
}

function guide() {
    if (userpinlock == 1) {
        setTimeout(to_guide, 500);
    }
    if (userpinlock == 0) {
        let person = prompt("Please enter your PIN:");
        if (person == pin) {
            userpinlock = 1
            document.getElementById("bimg").src = "image/bunlock.png";
            setTimeout(to_guide, 500);
        } 
    }
}

function delivery() {
    if (userpinlock == 1) {
        const url = "http:"+ip[1]+':5000/delivery'
        fetch(url)
        .then(response => response.text())  
        .then(text => {
            console.log(text);
            document.getElementById("demo").innerHTML = text
        })
        setTimeout(to_delivery, 500);
        
    }
    if (userpinlock == 0) {
        let person = prompt("Please enter your PIN:");
        if (person == pin) {
            userpinlock = 1
            document.getElementById("bimg").src = "image/bunlock.png";
            const url = "http:"+ip[1]+':5000/delivery'
            fetch(url)
            setTimeout(to_delivery, 500);
        } 
    }
    
}
function getHello_2() {
    const url = "http:"+ip[1]+':5000/hello'
    fetch(url)
    .then(response => response.json())  
    .then(json => {
        console.log(json);
        document.getElementById("demo").innerHTML = JSON.stringify(json)
    })
}
function test() {
    let i = 0;
    while (i < 500) {
      const url = ip+':5000/test'
      fetch(url)
      i++;
    }
    
}
function button_pin() {
  if (userpinlock == 0){
      let person = prompt("Please enter your PIN:");
      if (person == pin) {
        document.getElementById("myImg").src = "image/unlock.png";
        document.getElementById("bimg").src = "image/bunlock.png";
        userpinlock = 1;
      } else {
        document.getElementById("myImg").src = "image/lock.png";
        document.getElementById("bimg").src = "image/block.png";
      }
}
}



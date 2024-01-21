function getHello() {
    const url = 'http://192.168.89.27:80/home'
    fetch(url, {headers: new Headers({"ngrok-skip-browser-warning": "69420",})})
    .then(response => response.text())  
    .then(text => {
        console.log(text);
        document.getElementById("demo").innerHTML = text
    })
}
function getHello_2() {
    const url = 'http://192.168.89.27:80/hello'
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
      const url = 'http://192.168.89.27:80/test'
      fetch(url)
      i++;
    }
    
}


let link = window.location.href;
const ip = link.split(":");
let checkbut = 0;
let locations1 = "";
let locations2 = "";

function to_main(){
    location.href = "main.html";
}

function back() {
    const url = "http:"+ip[1]+':80/lock'
    fetch(url)
    setTimeout(to_main, 500);
}

function room1() {
    if (checkbut == 0) {
        document.getElementById("location1").innerHTML = ". ROOM 1 ."
        locations1 = "ROOM1"
        checkbut = 1

    }
    if (checkbut == 1 && locations1 != "ROOM1") {
        document.getElementById("location2").innerHTML = ". ROOM 1 ."
        locations2 = "ROOM1"
    }
}

function room2() {
    if (checkbut == 0) {
        document.getElementById("location1").innerHTML = ". ROOM 2 ."
        locations1 = "ROOM2"
        checkbut = 1

    }
    if (checkbut == 1 && locations1 != "ROOM2") {
        document.getElementById("location2").innerHTML = ". ROOM 2 ."
        locations2 = "ROOM2"
    }
}

function room3() {
    if (checkbut == 0) {
        document.getElementById("location1").innerHTML = ". ROOM 3 ."
        locations1 = "ROOM3"
        checkbut = 1

    }
    if (checkbut == 1 && locations1 != "ROOM3") {
        document.getElementById("location2").innerHTML = ". ROOM 3 ."
        locations2 = "ROOM2"
    }
}

function room4() {
    if (checkbut == 0) {
        document.getElementById("location1").innerHTML = ". ROOM 4 ."
        locations1 = "ROOM4"
        checkbut = 1

    }
    if (checkbut == 1 && locations1 != "ROOM4") {
        document.getElementById("location2").innerHTML = ". ROOM 4 ."
        locations2 = "ROOM4"
    }
}

function clears(){
    checkbut = 0
    locations = ""
    document.getElementById("location1").innerHTML = ".........."
    document.getElementById("location2").innerHTML = ".........."
}

function play(){
    location.href = "main.html";
}
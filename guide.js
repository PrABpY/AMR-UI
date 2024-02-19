let link = window.location.href;
const ip = link.split(":");
let checkbut = 0;
let locations1 = "";
let locations2 = "";

function back() {
    location.href = "main.html";
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
        locations2 = "ROOM3"
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
    locations1 = ""
    locations2 = ""
    document.getElementById("location1").innerHTML = ".........."
    document.getElementById("location2").innerHTML = ".........."
    location.reload(true);
}

function play(){
    // if (locations1 != "" && locations2 != ""){
        if (locations1 == "ROOM1"){
            const url = "http:"+ip[1]+':5000/ROOM1-'+locations2
            fetch(url)
        }
        if (locations1 == "ROOM2"){
            const url = "http:"+ip[1]+':5000/ROOM2-'+locations2
            fetch(url)
        }
        if (locations1 == "ROOM3"){
            const url = "http:"+ip[1]+':5000/ROOM3-'+locations2
            fetch(url)
        }
        if (locations1 == "ROOM4"){
            const url = "http:"+ip[1]+':5000/ROOM4-'+locations2
            fetch(url)
        }
    // }
}
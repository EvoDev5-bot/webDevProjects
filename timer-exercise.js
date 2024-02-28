



let totalSecs = 0;
let secs = 0;
let mins = 0;
let hrs = 0;

let sInt;
let mInt;
let hInt;

function seconds() {
    secs++;
    timer3.innerText = secs;
    totalSecs++;

    if (secs == 60) {
        secs = 0;
        mins++;
        timer2.innerText = mins
    }

    if (mins == 60) {
        mins = 0;
        secs = 0;
        hrs++;
        timer.innerText = hrs;
    }

    if (totalSecs < 120) {
        es.innerText = "JUMPING JACKS"
    }
    if (totalSecs == 120) {
        es.innerText = "HIGH KNEES"
    }
}



function stop() {
    clearInterval(sInt);
    timer.innerText = "0";
    timer2.innerText = "0";
    timer3.innerText = "0";
    es.innerText = "JUMPING JACKS"
    secs = 0;
    mins = 0;
    hrs = 0;
    totalSecs = 0;
}

function start() {
    sInt = setInterval(seconds, 1e+3)
}




document.addEventListener("DOMContentLoaded", function () {

    const timer3 = document.querySelector("#timer3")
    const timer2 = document.querySelector("#timer2")
    const timer = document.querySelector("#timer")

    const es = document.querySelector("#es");




})



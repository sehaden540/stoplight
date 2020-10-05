function Stop() {
    document.getElementById("stopLight").classList.toggle("stop");
    document.getElementById("slowLight").classList.remove("slow");
    document.getElementById("goLight").classList.remove("go");
}

function Slow() {
    document.getElementById("slowLight").classList.toggle("slow");
    document.getElementById("stopLight").classList.remove("stop");
    document.getElementById("goLight").classList.remove("go");
}

function Go() {
    document.getElementById("goLight").classList.toggle("go");
    document.getElementById("slowLight").classList.remove("slow");
    document.getElementById("stopLight").classList.remove("stop");
}
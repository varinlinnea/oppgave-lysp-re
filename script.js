let lightbulb = document.getElementById("lightbulb");
let text = document.getElementById("text");

function onOrOff() {
    if (lightbulb.style.backgroundColor == 'grey') {
        lightbulb.style.backgroundColor = 'yellow';
        text.innerHTML = "Lyset er på!"
    } else {
        lightbulb.style.backgroundColor = 'grey';
        text.innerHTML = "Lyset er av."
    }
}
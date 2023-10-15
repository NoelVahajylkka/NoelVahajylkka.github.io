const audioElement = document.getElementById("audio-element");
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits;

function showAlert() {
    audioElement.play();
    alert('hähää!');
}

function hedelma() {
    fruits.push("Lemon");
    document.getElementById("demo").innerHTML = fruits;
}
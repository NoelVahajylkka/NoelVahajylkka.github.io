const audioElement = document.getElementById("audio-element");
const fruitA = ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Pineapple"];;
var fruits = [];

function showAlert() {
    audioElement.play();
    alert('hähää!');
}

function getRandomFruit() {
    var randomIndex = Math.floor(Math.random() * fruitA.length);
    return fruitA[randomIndex];
}

function addRandomFruit() {
    var randomFruit = getRandomFruit();
    fruits.push(randomFruit);
    updateFruitDisplay();
}

function updateFruitDisplay() {
    var fruitDisplayElement = document.getElementById("fruits");
    fruitDisplayElement.textContent = fruits.join(", ");
    document.getElementById("fruits").innerHTML = fruits;
}

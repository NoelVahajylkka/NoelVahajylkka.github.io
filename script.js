const audioElement = document.getElementById("audio-element");
const fruitA = ["Apple", "Banana", "Orange", "Strawberry", "Grapes", "Pineapple"];;
var fruits = [];
document.getElementById("fruits").innerHTML = fruitA;

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
}

var addFruitButton = document.getElementById("addFruitButton");
addFruitButton.addEventListener("click", addRandomFruit);
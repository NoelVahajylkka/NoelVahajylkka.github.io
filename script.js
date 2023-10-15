const audioElement = document.getElementById("audio-element");
const fruitA = ["🍎", "🍌", "🍊", "🍓", "🍇", "🍍"];
var fruits = [];
const gifImages = [
    "image1.gif",
    "image2.gif",
    "image3.gif",
    "image4.gif",
    "image5.gif"
];
let currentIndex = 0;
const gifImage = document.getElementById("gifImage");

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

function switchGIF() {
    gifImage.src = gifImages[currentIndex];

    if (currentIndex < gifImages.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
}

switchGIF();

setInterval(switchGIF, 5000);
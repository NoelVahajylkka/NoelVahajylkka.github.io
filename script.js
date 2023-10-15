const audioElement = document.getElementById("audio-element");
const fruitA = ["🍎", "🍌", "🍊", "🍓", "🍇", "🍍"];
var fruits = [];
const gifImages = [
    "resources.visual/image1.gif",
    "resources.visual/image2.gif",
    "resources.visual/image3.gif",
    "resources.visual/image4.gif",
    "resources.visual/image5.gif"
];
const audioPlayer = document.getElementById("audioPlayer");
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
    } 
    else {
        currentIndex = 0;
    }
}

switchGIF();
setInterval(switchGIF, 5000);

function startAudio() {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();
}

startAudio();
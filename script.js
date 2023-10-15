const audioElement = document.getElementById("audio-element");
const fruitA = ["🍎", "🍌", "🍊", "🍓", "🍇", "🍍"];
var fruits = [];
const gifImages = [
    "visualresource/image1.gif",
    "visualresource/image2.gif",
    "visualresource/image3.gif",
    "visualresource/image4.gif",
    "visualresource/image5.gif"
];
const audioPlayer = document.getElementById("audioPlayer");
let currentIndex = 0;
const gifImage = document.getElementById("gifImage");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");
const playVideo1 = document.getElementById("playVideo1");
const playVideo2 = document.getElementById("playVideo2");

if (window.location.href.endsWith("kissat.html")) {
    switchGIF;
}

if (window.location.href.endsWith("kissat.html")) {
    setInterval(switchGIF,5000);
}

if (window.location.href.endsWith("kissat.html")) {
    startAudio();
}

playVideo1.addEventListener("click", function () {
    videoSource.src = "visualresource/video1.mp4";
    videoPlayer.load();
    videoPlayer.play();
});

playVideo2.addEventListener("click", function () {
    videoSource.src = "visualresource/video2.mp4";
    videoPlayer.load();
    videoPlayer.play();
});

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

function startAudio() {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();
}
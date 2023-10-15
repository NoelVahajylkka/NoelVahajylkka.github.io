const audioElement = document.getElementById("audio-element");
const fruitA = ["🍎", "🍌", "🍊", "🍓", "🍇", "🍍"];;
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

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'drop';
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.top = '0';
    document.body.appendChild(raindrop);

    // Animate the raindrop falling from the top to the bottom
    const animationDuration = Math.random() * 3 + 2; // Random duration between 2 to 5 seconds
    raindrop.style.transition = `top ${animationDuration}s linear`;
    raindrop.style.top = window.innerHeight + 'px';

    // Remove the raindrop after the animation completes
    setTimeout(() => {
        raindrop.remove();
    }, animationDuration * 1000);
}

function startRain() {
    setInterval(createRaindrop, 200); // Create a new raindrop every 200 milliseconds
}

window.addEventListener('load', startRain);
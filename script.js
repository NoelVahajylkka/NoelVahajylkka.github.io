const hobbies = ["Reading", "Gaming", "Cooking", "Hiking", "Painting"];

const audioElement = document.getElementById("audio-element");

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
    setInterval(switchGIF, 5000);
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

function switchGIF() {
    gifImage.src = gifImages[currentIndex];

    if (currentIndex < gifImages.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
}

function Character(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

async function generateRandomCharacter() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        const user = data.results[0];
        const randomName = user.name.first;
        const randomAge = Math.floor(Math.random() * 101);
        const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];

        return { name: randomName, age: randomAge, hobby: randomHobby };
    } catch (error) {
        console.error('Error fetching data from the API:', error);
    }
}

async function generateCharacter() {
        const randomCharacter = await generateRandomCharacter();
        const characterOutput = document.getElementById("characterOutput");
        characterOutput.innerHTML = "Random Character:<br>";
        characterOutput.innerHTML += "Name: " + randomCharacter.name + "<br>";
        characterOutput.innerHTML += "Age: " + randomCharacter.age + "<br>";
        characterOutput.innerHTML += "Hobby: " + randomCharacter.hobby + "<br>";
        await new Promise(resolve => setTimeout(resolve, 10000));
}

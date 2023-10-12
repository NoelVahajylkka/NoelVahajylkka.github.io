function showAlert() {
    alert('hähää!');
    const playButton = document.getElementById("popup-button");
        const audioElement = document.getElementById("audio-element");

        // Add a click event listener to the button
        playButton.addEventListener("click", function() {
            if (audioElement.paused) {
                // If the audio is paused, play it
                audioElement.play();
                playButton.innerHTML = "Pause Audio";
            } else {
                // If the audio is playing, pause it
                audioElement.pause();
                playButton.innerHTML = "Play Audio";
            }
        });
}

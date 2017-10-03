function init() {
  console.log('start animation');

  // store button and animation ids in vars
  var muteButton = document.getElementById('mute-button');
  var playButton = document.getElementById('play-button');
  var playToPause = document.getElementById('play-to-pause');
  var pauseToPlay = document.getElementById('pause-to-play');
  // store state of button in var
  var playing = true;

  // create on click listeners
  muteButton.addEventListener("click", toggleMute);
  playButton.addEventListener("click", togglePlay);

  // toggle the class of the mute button to start css transition
  function toggleMute() {
  	muteButton.classList.toggle('sound-mute');

  }

  // toggle the state of the play button and tell relevant svg animation to begin
  function togglePlay() {
  	if (playing === true) {
  		playToPause.beginElement();
  		playing = false;
  	} else {
  		pauseToPlay.beginElement();
  		playing = true;
  	}

  }

}
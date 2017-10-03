function init() {
  console.log('start animation');

  // store button and animation ids in vars
  var muteButton = document.getElementById('mute-button');
  var playButton = document.getElementById('play-button');
  var playToPauseOne = document.getElementById('play-to-pause-one');
  var pauseToPlayOne = document.getElementById('pause-to-play-one');
  var playToPauseTwo = document.getElementById('play-to-pause-two');
  var pauseToPlayTwo = document.getElementById('pause-to-play-two');
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
  		playToPauseOne.beginElement();  		
  		playToPauseTwo.beginElement();
  		playing = false;
  	} else {
  		pauseToPlayOne.beginElement();
  		pauseToPlayTwo.beginElement();
  		playing = true;
  	}

  }

}
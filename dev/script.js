function init() {
  console.log('start animation');



  // store button and animation ids in vars
  var muteButton = document.querySelector('.mute-button');
  var playButton = document.querySelector('.play-button');
  var playButtonLeft = document.querySelector('.play-button-left');
  var playButtonRight = document.querySelector('.play-button-right');
  // store state of button in var
  var playing = false;

  // create on click listeners
  muteButton.addEventListener("click", toggleMute);
  playButton.addEventListener("click", togglePlay);

  // toggle the class of the mute button to start css transition
  function toggleMute() {
  	muteButton.classList.toggle('sound-mute');

  }


var pauseShapeOne = "92 151 67 151 67 64 92 64 92 108";
var playShapeOne = "142 108 67 151 67 64 142 108 142 108";
var pauseShapeTwo = "142 151 117 151 117 64 142 64 142 108";
var playShapeTwo = "142 108 67 151 67 64 142 108 142 108";


  // toggle the state of the play button 
  function togglePlay() {
    // If the video is paused show the play button
  	if (playing === false) {
      //change the from and to attributes of the svg animate tag
      // add the new coordinates for the shape from the vars
  		playButtonLeft.setAttribute("from", playShapeOne);
  		playButtonLeft.setAttribute("to", pauseShapeOne);
  		playButtonRight.setAttribute("from", playShapeTwo);
  		playButtonRight.setAttribute("to", pauseShapeTwo);
      playButtonLeft.beginElement(); 
      playButtonRight.beginElement(); 
  		playing = true;
  	} else {
      // do the opposite
  		playButtonLeft.setAttribute("from", pauseShapeOne);
  		playButtonLeft.setAttribute("to", playShapeOne);
  		playButtonRight.setAttribute("from", pauseShapeTwo);
  		playButtonRight.setAttribute("to", playShapeTwo);
      playButtonLeft.beginElement(); 
      playButtonRight.beginElement(); 
  		playing = false;
  	}

  }




}
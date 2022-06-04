/* Definition of variable*/

let AUDIO_FILES_LIST = [
    './assets/audio/chachacha1.mp3',
    './assets/audio/chachacha2.mp3',
    './assets/audio/chachacha3.mp3',
];

let MENS_STEPS_IMG_LIST = [
    './assets/images/dancingmen/stepsmen1.png',
    './assets/images/dancingmen/stepsmen2.png',
    './assets/images/dancingmen/stepsmen3.png',
    './assets/images/dancingmen/stepsmen4.png',
    './assets/images/dancingmen/stepsmen5.png',
    './assets/images/dancingmen/stepsmen6.png',
    './assets/images/dancingmen/stepsmen7.png',
    './assets/images/dancingmen/stepsmen8.png'
];

/* Click start button to start training*/
document.getElementById("startmen").addEventListener("click", startDance);

/* function for complete start process */
function startDance (){
    /*countdown from 3 to 1 as preparation for the user to get ready*/
    let countdown = 3;
    let downloadTimer = setInterval(function(){
        if(countdown <= 0){
            document.getElementById("counter-div").innerHTML = "Let's dance!";
            clearInterval(downloadTimer);
            /*after countdown, music starts playing and steps start dancing*/
            playMusic();
            loadLeadingSteps();
        } else {
            document.getElementById("counter-div").innerHTML = countdown + " seconds remaining";
        }
        countdown -= 1;
    }, 1000);
}


/* timeout to slow down dance steps (men)*/
function changeStepImage(index) {
    const timeoutRef = setTimeout(function() {
         document.getElementById('step-img').src= MENS_STEPS_IMG_LIST[index];
         clearTimeout(timeoutRef)
    }, index*1000);
  }

/* indexing through array of dance steps (men)*/
function loadLeadingSteps(){
    for (var i=0; i < MENS_STEPS_IMG_LIST.length; i++){
        changeStepImage(i);
    }
}

  /*generate random integer (for music array)*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

/*automatic music play when start button is pushed*/
function playMusic(){
    const randomNo = getRandomInt(AUDIO_FILES_LIST.length - 1);
    var audio = new Audio(AUDIO_FILES_LIST[randomNo]);
    audio.play();
}

/*timer counting the time passed since start button was pushed*/
if(getElementbyId="startmen".clicked == true){
setInterval(function(){
    let timerElement = document.getElementById('practice');
    let currentTime = timerElement.innerHTML;
    currentTime++;
    timerElement.innerHTML = currentTime;
  }, 1000);
}

/*music buttons*/
document.getElementById("playpause").addEventListener("click", playPause);
document.getElementById("muteunmute").addEventListener("click", muteUnmute);



/*pause button*/
function playPause(){
    let pause = document.getElementById("playpause");
    pause.addEventListener("click", function(){
      if(AUDIO_FILES_LIST.paused){
        AUDIO_FILES_LIST.play();
        button.innerHTML = "Pause";
      } else {
        AUDIO_FILES_LIST.pause();
        button.innerHTML = "Play";
      }
    });
}

/*mute button*/
function unMute(){
    let mute = document.getElementById("muteunmute");
    mute.addEventListener("click", function(){
        if (AUDIO_FILES_LIST.muted === false) {    
            AUDIO_FILES_LIST.muted = true;
            button.innerHTML = "muted";
        }
        else {
            AUDIO_FILES_LIST.muted = false;
            button.innerHTML = "unmuted";
        });
    }

  
/* shuffle music when button is clicked*/
document.getElementById("shuffle").addEventListener("click", playMusic);

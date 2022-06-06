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

let lightgrey = 'rgb(211, 211, 211)'

/* Click start button to start training*/
document.getElementById("startmen").onclick = startMenClicked;

function startMenClicked() {
    startDance();
    setPracticeTimes();
}

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
            changeStepImage(0);
        } else {
            /*display counter*/
            document.getElementById("counter-div").innerHTML = countdown + " seconds remaining";
        }
        countdown -= 1;
    }, 1000);
}


/* timeout to slow down dance steps (men)*/
function changeStepImage(index) {
    index = index % 8;
    if(AUDIO_FILES_LIST.play == false) {
        return
    }
    const timeoutRef = setTimeout(function() {
        loadNextStep(index)
        clearTimeout(timeoutRef)
        changeStepImage(index+1)
    }, 1000);
}

function loadNextStep(i) {
    document.getElementById('step-img').src= MENS_STEPS_IMG_LIST[i];
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

/*practice timer counting the time passed since start button was pushed*/
function setPracticeTimes() {
    setInterval(practiceTime, 1000);
}

function practiceTime () {
    let timerElement = document.getElementById('practice');
    let currentTime = timerElement.innerHTML;
    currentTime++;
    timerElement.innerHTML = currentTime;
  }

function clicked(button_id) {
    const btn = document.getElementById(button_id);
    const style = getComputedStyle(btn);
        console.log(style.backgroundColor);
        if (style.backgroundColor == lightgrey){
            changetoRed(button_id);
        }
        else {
            changetoGrey(button_id);
        }
    }

    /*change background color of music button to grey  */

    function changetoGrey(button_id) {
        let color0 = document.getElementById(button_id);
        color0.style.backgroundColor = "lightgrey";
    } 

    function changetoRed(button_id) {
        let color1 = document.getElementById(button_id);
        color1.style.backgroundColor = "red";
    } 

    
/*pause button get element by id mute direct umfärbt -- event handler wenn event feuert, bringt da nix*/
document.getElementById('playpause').onclick = playPause;
function playPause(){
        clicked('playpause')
        if(color === "red" ){
        AUDIO_FILES_LIST.pause();
      } else { if (color === "grey"){
        AUDIO_FILES_LIST.play();
    } }
    };


/*mute button toggle,  pause/play direkt abfragen den CSS code*/
document.getElementById('muteunmute').onclick = unMute;
function unMute(){
         clicked('muteunmute')
        if (color === "grey") {    
            AUDIO_FILES_LIST.volume = 1;
            button.innerHTML = "unmuted";
        }
        else { if(color === "red")
            AUDIO_FILES_LIST.volume = 0;
            button.innerHTML = "muted";
        };
    }

/* shuffle music when button is clicked*/
document.getElementById("shuffle").onclick= playMusic;
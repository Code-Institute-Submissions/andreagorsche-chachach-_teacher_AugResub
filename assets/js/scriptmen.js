/* Definition of variable*/

let AUDIO_FILES_LIST = [
    './assets/audio/song1.mp3',
    './assets/audio/song2.mp3',
    './assets/audio/song3.mp3',
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

var lightgrey = 'rgb(211, 211, 211)';
var audioRef = null;
var timeoutRef = null;
var practiceTimerRef = null;
var downloadTimerRef = null;

/* Click start button to start training*/
document.getElementById("startmen").onclick = startMenClicked;

/*function initializing the start of the dance and the practice time*/
function startMenClicked() {
    startDance();
    setPracticeTimes();
    document.getElementById("startmen").disabled = true;
}

/* function to start the dance */
function startDance() {
    /*countdown from 3 to 1 as preparation for the user to get ready*/
    let countdown = 3;
    /*after countdown, music starts playing and steps start dancing*/
    playMusic();
    downloadTimerRef = setInterval(function () {
        if (countdown <= 0) {
            document.getElementById("counter-div-men").innerHTML = "";
            clearInterval(downloadTimerRef);
            changeStepImage(0);
        } else {
            /*display counter*/
            document.getElementById("counter-div-men").innerHTML = countdown + " secs remaining";
        }
        countdown -= 1;
    }, 1000);
}

/* timeout to slow down dance steps (men)*/
function changeStepImage(index) {
    index = index % 8;
    timeoutRef = setTimeout(function () {
        loadNextStep(index);
        clearTimeout(timeoutRef);
        changeStepImage(index + 1);
    }, 1000);
}

/*loading steps */
function loadNextStep(i) {
    document.getElementById('step-img-men').src = MENS_STEPS_IMG_LIST[i];
}

/*stop steps */
function stopSteps() {
    document.getElementById("counter-div-men").innerHTML = "Stopped";
    clearTimeout(timeoutRef);
}

/*generate random integer (for music array)*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*automatic music play when start button is pushed*/
function playMusic() {
    enableMusicControls();
    const randomNo = getRandomInt(AUDIO_FILES_LIST.length - 1);
    audioRef = new Audio(AUDIO_FILES_LIST[randomNo]);
    audioRef.play();
}

/* enable and disable mute and shuffle button*/
function enableMusicControls() {
    document.getElementById('muteunmute').disabled = false;
    document.getElementById("shuffle").disabled = false;
}

function disableMusicControls() {
    document.getElementById('muteunmute').disabled = true;
    document.getElementById("shuffle").disabled = true;
}

/*interval set for practice timer*/
function setPracticeTimes() {
    practiceTimerRef = setInterval(practiceTime, 1000);
}

/*stop practice time*/
function stopPracticeTime() {
    clearInterval(practiceTimerRef);
}

/*practice timer counting the time passed since start button was pushed*/
function practiceTime() {
    let timerElement = document.getElementById('time-men');
    let currentTime = parseInt(timerElement.innerHTML);
    currentTime++;
    timerElement.innerHTML = `${currentTime} secs`;
}

/*function to know if pause/mute button is clicked*/
function clicked(button_id) {
    const btn = document.getElementById(button_id);
    const style = getComputedStyle(btn);
    console.log(style.backgroundColor);
    if (style.backgroundColor == lightgrey) {
        changetoRed(button_id);
    } else {
        changetoGrey(button_id);
    }
}

/*change background color of music button to grey/red */
function changetoGrey(button_id) {
    let color0 = document.getElementById(button_id);
    color0.style.backgroundColor = "lightgrey";
}

function changetoRed(button_id) {
    let color1 = document.getElementById(button_id);
    color1.style.backgroundColor = "red";
}

/*pause button*/
document.getElementById('pause').onclick = onPause;

function onPause() {
    if (audioRef) {
        clearInterval(downloadTimerRef);
        disableMusicControls();
        audioRef.pause();
        stopSteps();
        stopPracticeTime();
        document.getElementById("startmen").disabled = false;
    }
}


/*mute button*/
document.getElementById('muteunmute').onclick = unMute;

function unMute() {
    if (audioRef) {
        clicked('muteunmute');
        audioRef.muted = !audioRef.muted;
    }
}

/* shuffle music when button is clicked*/
document.getElementById("shuffle").onclick = shuffleMusic;

function shuffleMusic() {
    if (audioRef) {
        const randomNo = getRandomInt(AUDIO_FILES_LIST.length - 1);
        audioRef.pause();
        audioRef = new Audio(AUDIO_FILES_LIST[randomNo]);
        audioRef.play();
    }
}
/* Definition of variable*/

let AUDIO_FILES_LIST = [
    './assets/audio/chachacha1.mp3',
    './assets/audio/chachacha2.mp3',
    './assets/audio/chachacha3.mp3',
];

let WOMENS_STEPS_IMG_LIST = [
    './assets/images/dancingwomen/womensteps.png',
    './assets/images/dancingmen/womensteps2.png',
    './assets/images/dancingmen/womensteps3.png',
    './assets/images/dancingmen/womensteps4.png',
    './assets/images/dancingmen/womensteps5.png',
    './assets/images/dancingmen/womensteps6.png',
    './assets/images/dancingmen/womensteps7.png',
    './assets/images/dancingmen/womensteps8.png'
];

let lightgrey = 'rgb(211, 211, 211)';
let red = 'rgb(255, 0, 0)';
var audioRef = null;

/* Click start button to start training*/
document.getElementById("startwomen").onclick = startWomenClicked;

function startWomenClicked() {
    startDance();
    setPracticeTimes();
}

/* function for complete start process */
function startDance() {
    /*countdown from 3 to 1 as preparation for the user to get ready*/
    let countdown = 3;
    /*after countdown, music starts playing and steps start dancing*/
    playMusic();
    let downloadTimer = setInterval(function () {
        if (countdown <= 0) {
            document.getElementById("counter-div").innerHTML = "";
            clearInterval(downloadTimer);
            changeStepImage(0);
        } else {
            /*display counter*/
            document.getElementById("counter-div").innerHTML = countdown + " secs remaining";
        }
        countdown -= 1;
    }, 1000);
}

/* timeout to slow down dance steps (men)*/
function changeStepImage(index) {
    index = index % 8;
    const timeoutRef = setTimeout(function () {
        loadNextStep(index)
        clearTimeout(timeoutRef)
        changeStepImage(index + 1)
    }, 1000);
}

/*loading steps */
function loadNextStep(i) {
    document.getElementById('step-img').src = WOMENS_STEPS_IMG_LIST[i];
}

/*generate random integer (for music array)*/
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*automatic music play when start button is pushed*/
function playMusic() {
    const randomNo = getRandomInt(AUDIO_FILES_LIST.length - 1);
    audioRef = new Audio(AUDIO_FILES_LIST[randomNo]);
    audioRef.play();
}

/*interval set for practice timer*/
function setPracticeTimes() {
    setInterval(practiceTime, 1000);
}

/*practice timer counting the time passed since start button was pushed*/
function practiceTime() {
    let timerElement = document.getElementById('practice');
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

/*change background color of music button to grey  */

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
    clicked('pause')
    audioRef.pause();
};

/*mute button*/
document.getElementById('muteunmute').onclick = unMute;

function unMute() {
    clicked('muteunmute')
    audioRef.muted = !audioRef.muted;
}

/* shuffle music when button is clicked*/
document.getElementById("shuffle").onclick = shuffleMusic;

function shuffleMusic() {
    const randomNo = getRandomInt(AUDIO_FILES_LIST.length - 1);
    audioRef.pause();
    audioRef = new Audio(AUDIO_FILES_LIST[randomNo]);
    audioRef.play();
}
/* if a button is clicked, intro disappears, 
if leading was clicked men dancefloor appears, 
if nonleading is clicked women dancefloor appers*/

/*initial decision by user*/
document.getElementById("leading").addEventListener("click", initialCheck ());
document.getElementById("nonleading").addEventListener("click", initialCheck ());

function initialCheck () {
if(document.getElementById('button').clicked == true) {
    let intro = document.getElementById("intro");
    intro.remove();
        if(document.getElementById('leading').clicked == true) {
        document.getElementById("dancefloormen").removeAttribute("hidden"); 
        }
        else {
        document.getElementById("dancefloorwomen").removeAttribute("hidden"); 
        }
    }
}

/* Clicking start button to start training*/
document.getElementById("startmen").addEventListener("click", startLeadingSteps ());
document.getElementById("startwomen").addEventListener("click", startNonLeadingSteps());

/*collective function starting 4 sub functions when "start button" is clicked*/
function startLeadingSteps (){
    counter();
    playMusic();
    practiceTime();
    loadLeadingSteps();
}

/*countdown from 3 to 1 as preparation for the user to get ready*/

function counter (){
    let countdown = 3;
    let downloadTimer = setInterval(function(){
    if(countdown <= 0){
    clearInterval(downloadTimer);
    document.getElementById("counter-div").innerHTML = "Finished";
        } else {
        document.getElementById("counter-div").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    }, 1000);
} 

/*automatic music play when start button pushed*/
function playMusic(){
    let music = [./audio/chachacha1.mp3,
    ./audio/chachacha2.mp3,
    ./audio/chachacha3.mp3,
    ]
    for(i=0; i < music.length; i++) {
        music.play();
    }
}

/*timer counting the time passed since start button was pushed*/
function practiceTime(){
        let timerElement = document.getElementById('practice');
        let currentTime = timerElement.innerHTML;
        currentTime++;
        timerElement.innerHTML = currentTime;
        , 1000);
}

/* array of pictures shown astep-by-step dancing lesson for men*/
function loadLeadingSteps(){
    let menStepArray [./images/dancingmen/stepsmen1.png,
    ./images/dancingmen/stepsmen2.png,
    ./images/dancingmen/stepsmen3.png,
    ./images/dancingmen/stepsmen4.png,
    ./images/dancingmen/stepsmen5.png,
    ./images/dancingmen/stepsmen6.png,
    ./images/dancingmen/stepsmen7.png,
    ./images/dancingmen/stepsmen8.png]
for (let i=0; i < menArray.length; i++){
        document.getElementById('dancesteps1')= menStepArray.innerHTML;
    }   
}

/* Clicking start button to start training*/
document.getElementById("playpause").addEventListener("click", playPause ());
document.getElementById("muteunmute").addEventListener("click", unMute());
document.getElementById("shuffle").addEventListener("click", shuffleMusic());

/*music buttons*/
function playPause(){
    let music = [./audio/chachacha1.mp3,
    ./audio/chachacha2.mp3,
    ./audio/chachacha3.mp3,
    ]
    let count = 0;
    if (count === 0){
    music.play();
    }
        else {
        music.pause();
        }
}
    
function unMute(){
    let music = [./audio/chachacha1.mp3,
    ./audio/chachacha2.mp3,
    ./audio/chachacha3.mp3,
    ]
    let count = 0;
    if (count === 0){
    music.muted = false;
    }
    else {
    music.muted = true;
    }
}

function shuffleMusic(){
    let music = [./audio/chachacha1.mp3,
    ./audio/chachacha2.mp3,
    ./audio/chachacha3.mp3,
    ]
    while (i > 0; i < musiclength; i++) {
    musicnum = Math.floor(Math.random() * i);
}


/* to be defined according to the LeadingSteps function

loadNonLeadingSteps(){
    
}
*/
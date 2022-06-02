/* if a button is clicked, intro disappears, 
if leading was clicked men dancefloor appears, 
if nonleading is clicked women dancefloor appers*/

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

/* click start button on dancefloor to start dance session*/
document.getElementById("startmen").addEventListener("click", startLeadingSteps ());
document.getElementById("startwomen").addEventListener("click", startNonLeadingSteps());


function startLeadingSteps (){
    counter();
    loadLeadingSteps();
    playMusic();
}

function counter (){

} 

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

function playMusic(){
    let music = [./audio/chachacha1.mp3,
    ./audio/chachacha2.mp3,
    ./audio/chachacha3.mp3,
    ]
    for(i=0; i < music.length; i++) {
    music.play();
    }
}

document.getElementByClass("playpause").addEventListener("click", pauseMusic());

function pauseMusic() {
  music.pause();
} 
    
}

function muteMusic(){
    
    
}



function shuffleMusic(){
   
    
}

/* to be defined according to the LeadingSteps function
loadNonLeadingSteps(){
    
}
*/
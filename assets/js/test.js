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

let myInterval=0;




function changeStepImage(index) {
   myInterval = setInterval(function() {
    document.getElementById('step-img-men').src= MENS_STEPS_IMG_LIST[index];
    clearInterval(myInterval)
}, index*1000);
  }

  function loadNextStep(i) {
    for (var i=0; i < MENS_STEPS_IMG_LIST.length; i++){
      changeStepImage(i);  }
    }

function myStop() {
  clearInterval(myInterval);
}


document.getElementById("pause").onclick = myStop;
document.getElementById("play").onclick = changeStepImage;

function myStopFunction() {
  clearTimeout(timeoutRef);
}

/* Definition of variable*/

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

/* Clicking start button to start training*/
document.getElementById("startmen").addEventListener("click", loadLeadingSteps ());

/* array of pictures shown a step-by-step dancing lesson for men*/
function changeStepImage(index){
    const timeoutRef = setTimeout(function(){
        document.getElementById('step-img').src=
    MENS_STEPS_IMG_LIST[index];
        clearTimeout(timeoutRef)
    }, index*1000);
}
function loadLeadingSteps(){
    for (var i=0; i < MENS_STEPS_IMG_LIST.length; i++){
        changeStepImage(i);
    }   
}

//Idle animation function

const girl = document.getElementById("girl");
let idleImageNumber = 0;
let idleAnimationNumber = 0;

function idleAnimation(){
    idleImageNumber = idleImageNumber + 1;
    if( idleImageNumber == 11){
        idleImageNumber = 1;
    }
    girl.src = "resources/idle (" + idleImageNumber + ").png";
}

//Idle animation start funtion
function idleAnimationStart(){
idleAnimationNumber = setInterval(idleAnimation, 200);
}

//run animaition function

let runImageNumber = 0;
let runAnimationNumber = 0;
function runAnimation()
{
runImageNumber = runImageNumber + 1;
if( runImageNumber == 9){
    runImageNumber = 1;
}
girl.src = "resources/Run (" + runImageNumber + ").png";
}

//run animation start funtion
function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);
}
//run charactor with enterkey press

function keyCheck(event){
//alert(event.which);
//enter =13;

const key=event.which;

if(key == 13){
    if(runAnimationNumber == 0){
       runAnimationStart();
    }
  }

if( moveBackgroundAnimationId == 0){
    moveBackgroundAnimationId = setInterval(moveBackground,100);   
  }
}

//move background function

let backgroundImagePositionX = 0;
let moveBackgroundAnimationId = 0;

function moveBackground()
{
    backgroundImagePositionX= backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}
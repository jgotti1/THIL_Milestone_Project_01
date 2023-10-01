//Idle animation function

const girl = document.getElementById("girl");
idleImageNumber = 0;
idleAnimationNumber = 0;

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

runImageNumber = 0;
runAnimationNumber = 0;
function runAnimation()
{
runImageNumber = runImageNumber + 1;
if( idleImageNumber == 11){
    idleImageNumber = 1;
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
}
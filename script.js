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

function idleAnimationStart(){
idleAnimationNumber = setInterval(idleAnimation, 200);
}

//run animaition function

runImageNumber = 0;

function runAnimation()
{
runImageNumber = runImageNumber + 1;
if( idleImageNumber == 11){
    idleImageNumber = 1;
}
girl.src = "resources/Run (" + runImageNumber + ").png";
}


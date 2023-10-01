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
 console.log(girl.src);
}

function idleAnimationStart(){
idleAnimationNumber = setInterval(idleAnimation, 200);
}
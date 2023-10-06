//Idle animation function

const girl = document.getElementById("girl");
let idleImageNumber = 1;    //globle variables   
let idleAnimationNumber = 0; //globle variables  

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

let runImageNumber = 1; //globle variables  
let runAnimationNumber = 0; //globle variables  
function runAnimation()
{
runImageNumber = runImageNumber + 1;
if(runImageNumber == 9){
    runImageNumber = 1;
    }
girl.src = "resources/Run (" + runImageNumber + ").png"; //link images related to run
}

//run animation start function
function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation, 100);//calling runAnimation function
    clearInterval(idleAnimationNumber);//stop idleAnimation function when run AnimationStart
}

//jump animation function
let jumpImageNumber = 1;     //globle variables
let jumpAnimationNumber = 0; //globle variables
let girlMarginTop = 620;

 function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    //fly
    if(jumpImageNumber <= 5)
     {
       // console.log("up " + girlMarginTop )
        girlMarginTop = girlMarginTop - 40;
        girl.style.marginTop = girlMarginTop + "px";
     }
     //landing
     else if(jumpImageNumber < 10)
     {
        //console.log("down " + girlMarginTop )
        girlMarginTop = girlMarginTop + 40;
        girl.style.marginTop = girlMarginTop + "px";
     }
     else if(jumpImageNumber == 10){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber); //stop jumpAnimation when it is 11
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart(); //run charctor again

    }
    
    girl.src = "resources/jump (" +jumpImageNumber+ ").png"; //link images related to jump
 }
 //jump animation  start function   
 function jumpAnimationStart(){
    clearInterval(idleAnimationNumber); //stop running idle animation when jump animation start
    runImageNumber = 0;
    clearInterval(runAnimationNumber); //stop run animation
    jumpAnimationNumber = setInterval(jumpAnimation,100);//start jump animation
}

//run charactor with key press

function keyCheck(event){
//alert(event.which);
//enter =13
//space =32

const key = event.which;
//run charactor with enter key press
if(key == 13){
    if(runAnimationNumber == 0){
       runAnimationStart();
     }
    if(moveBackgroundAnimationId == 0){
       moveBackgroundAnimationId = setInterval(moveBackground,100);   //calling moveBackground function
     }
     if(obsAnimationId == 0){
        obsAnimationId = setInterval(ObsAnimation,100); //calling obsAnimation function to start 100 miliseconds
     }
    }

 //jump charactor with space bar
 if(key == 32){
    if(jumpAnimationNumber == 0){
       jumpAnimationStart();
     }
    }
    if(moveBackgroundAnimationId == 0){
        moveBackgroundAnimationId = setInterval(moveBackground,100);    //calling moveBackground function
     } 
    
    if(obsAnimationId == 0){
        obsAnimationId = setInterval(ObsAnimation,100); //calling obsAnimation function to start 100 miliseconds
     }
}



//move background function

let backgroundImagePositionX = 0;  
let moveBackgroundAnimationId = 0;
let score = 0;
function moveBackground()
{
    backgroundImagePositionX= backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
   
    score = score + 1;
    //console.log(score);
    document.getElementById("score").innerHTML = score;
}

//create obstacles function

 //let obsMarginLeft = 500;
let obsMarginLeft = 1920; //stop showing obstacles when game start  

function createObstacles()
{
    for (let i=0; i<=10; i++) //create 10 obstacles
        {
        
   let obs = document.createElement("div");//create javascript div 
   obs.className = "obs";//assign class name 
   document.getElementById("background").appendChild(obs);
   obs.style.marginLeft = obsMarginLeft + "px";
   obs.id ="obs" + i;

   //obsMarginLeft =obsMarginLeft + 1000; //add distance in between obstacles
    if(i < 5)
    {
        obsMarginLeft = obsMarginLeft + 1000; 
    }
    if(i >= 5)
    {
        obsMarginLeft = obsMarginLeft + 500; 
    }
        }
}

let obsAnimationId = 0;
function ObsAnimation(){
    for (let i=0; i<10; i++) 
        {
    let obs = document.getElementById("obs" + i);
    let currentMarginLeft =getComputedStyle(obs).marginLeft;
    let newMarginLeft = parseInt(currentMarginLeft) - 35;
    obs.style.marginLeft = newMarginLeft + "px";

    if(newMarginLeft >= -100  & newMarginLeft <= 100){
        if(girlMarginTop > 600){
        clearInterval(obsAnimationId);

        clearInterval(runAnimationNumber);
        runAnimationNumber = -1;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = -1;

        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;

        deadAnimationNumber = setInterval( girlDeadAnimation,100); //calling girlDeadAnimation function to start 100 miliseconds
      }

    }
        }    
}

//Dead animation function
let deadImageNumber = 1;
let deadAnimationNumber = 0;

function girlDeadAnimation()
{
    deadImageNumber =  deadImageNumber + 1;

    if(deadImageNumber == 11){
        deadImageNumber = 10;
    }
    girl.src = "resources/Dead (" + deadImageNumber + ").png"; //link images related to dead
}

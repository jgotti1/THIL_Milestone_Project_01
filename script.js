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
girl.src = "resources/Run (" + runImageNumber + ").png";
}

//run animation start function
function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);
}

//jump animation function
let jumpImageNumber = 1;     //globle variables
let jumpAnimationNumber = 0; //globle variables
let girlMarginTop = 620;
 function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    if(jumpImageNumber <= 6)
     {
        girlMarginTop = girlMarginTop - 20;
        girl.style.marginTop = girlMarginTop + "px";
     }
     if(jumpImageNumber >= 7)
     {
        girlMarginTop = girlMarginTop + 20;
        girl.style.marginTop = girlMarginTop + "px";
     }

    if(jumpImageNumber == 11){
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber); //stop jumpAnimation when it is 11
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart(); //run charctor again
    }

    girl.src = "resources/jump (" +jumpImageNumber+ ").png";
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
       moveBackgroundAnimationId = setInterval(moveBackground,100);   
     }
     if(obsAnimationId == 0){
        obsAnimationId = setInterval(ObsAnimation,100);
     }
  }

 //jump charactor with space bar
 if(key == 32){
    if(jumpAnimationNumber == 0){
       jumpAnimationStart();
     }
    }
    if(moveBackgroundAnimationId == 0){
        moveBackgroundAnimationId = setInterval(moveBackground,100);   
     }  
    if(obsAnimationId == 0){
        obsAnimationId = setInterval(ObsAnimation,100);
     }
}

//move background function

let backgroundImagePositionX = 0;  
let moveBackgroundAnimationId = 0;

function moveBackground()
{
    backgroundImagePositionX= backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
   // const xPosition = gif.offsetLeft;
//     leftPosition += 1; // Adjust the speed as needed
//    document.getElementById("boar_obs2").style.left = xPosition-40 + "px";
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
    if(i<5)
    {
        obsMarginLeft =obsMarginLeft + 1000; 
    }
    if(i>=5)
    {
        obsMarginLeft =obsMarginLeft + 500; 
    }

        }
}

let obsAnimationId = 0;
function ObsAnimation(){
    for (let i=0; i<10; i++) 
        {
    let obs = document.getElementById("obs" + i);
    let currentMarginLeft =getComputedStyle(obs).marginLeft;
    let newMarginLeft = parseInt(currentMarginLeft) - 25;
    obs.style.marginLeft = newMarginLeft + "px";
        }    
}
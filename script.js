//Load sound files
//start background sound

const startSound = new Audio("resources/start1.mp3");
startSound.loop = true; //continue sound track
startSound.volume = 0.1; //control audio file volume
startSound.play(); //play start sound

//running sound
const run = new Audio("resources/run.mp3");

//game over sound
const gameOverSound = new Audio("resources/gameOver.mp3");
gameOverSound.volume = 0.1;

//jump sound
const jumpSound = new Audio("resources/jump.mp3");

//dead sound
const deadSound = new Audio("resources/dead.mp3");

//Start-keyCheck
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
            moveBackgroundAnimationId = setInterval(moveBackground,100);//calling moveBackground function
         } 
        
        if(obsAnimationId == 0){
            obsAnimationId = setInterval(ObsAnimation,100); //calling obsAnimation function to start 100 miliseconds
         }
    }

//Idle animation function
const girl = document.getElementById("girl"); //capture the charactor
let idleImageNumber = 1;    //globle variables   
let idleAnimationNumber = 0; //globle variables  

function idleAnimation(){
    startSound.play();
    idleImageNumber = idleImageNumber + 1;
    if( idleImageNumber == 11){ //no of idle animated images
        idleImageNumber = 1;
    }
    girl.src = "resources/Idle " + "(" + idleImageNumber + ")"+".png";
}

//Idle animation start funtion
function idleAnimationStart(){
idleAnimationNumber = setInterval(idleAnimation, 100);
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
    run.play(); //play run sound
    //run.loop = true;
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
        runAnimationStart(); //run charactor again
        run.play(); //play run sound
    }
    
    girl.src = "./resources/jump (" +jumpImageNumber+ ").png"; //link images related to jump
 }
 //jump animation  start function   
 function jumpAnimationStart(){
    clearInterval(idleAnimationNumber); //stop running idle animation when jump animation start
    runImageNumber = 0;
    clearInterval(runAnimationNumber); //stop run animation
    jumpAnimationNumber = setInterval(jumpAnimation,100);//start jump animation
    jumpSound.play(); //play jump sound
}

//move background function

let backgroundImagePositionX = 0;  
let moveBackgroundAnimationId = 0;
let score = 0;
function moveBackground()
{
    backgroundImagePositionX= backgroundImagePositionX - 20; //moving background image by 20 pixels each at a time
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
   
    score = score + 1; //calculate score
    //let scoreString = "Score :";
    //console.log(scoreString);
    //console.log(score);
    document.getElementById("score").innerHTML ="Score : " + score; //get and change the content of an element
}

//create obstacles function

 //let obsMarginLeft = 500;
let obsMarginLeft = 1920; //stop showing obstacles when game start  
function createObstacles()
{
    for (let i=0; i<=100; i++) //create 100 obstacles
        {
        
   let obs = document.createElement("div");//create javascript div 
   obs.className = "obs";//assign class name 
   document.getElementById("background").appendChild(obs); //append obstacle to the background
   obs.style.marginLeft = obsMarginLeft + "px";
   obs.id ="obs" + i;

   //obsMarginLeft =obsMarginLeft + 1000; //add distance in between obstacles
    if(i < 10)
    {
        obsMarginLeft = obsMarginLeft + 1000; 
    }
    if(i >= 10 & i < 20)
    {
        obsMarginLeft = obsMarginLeft + 800; 
    }
    if(i >= 20 & i < 50)
    {
        obsMarginLeft = obsMarginLeft + 650; 
    }
    if(i >= 50)
    {
        obsMarginLeft = obsMarginLeft + 500; 
    }
        }
    
}
//start-move obstacles
let obsAnimationId = 0;
function ObsAnimation(){
    for (let i=0; i<100; i++) // create 100 obstacles
        {
    let obs = document.getElementById("obs" + i);
    let currentMarginLeft =getComputedStyle(obs).marginLeft;
    //let currentMarginRight  = getComputedStyle(obs).marginRight;
    let newMarginLeft = parseInt(currentMarginLeft) - 35;
    obs.style.marginLeft = newMarginLeft + "px";

    if(newMarginLeft >= 300  & newMarginLeft <= 400){ //check if the charactor is touching the obstacles
        if(girlMarginTop > 600){
            //gameOver = true;
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

        document.getElementById("gameOver").style.visibility ="visible"; //when dead visible end div
        document.getElementById("endScore").innerHTML = score; //get endScore div
    }
    deadSound.play();
    girl.src = "resources/Dead (" + deadImageNumber + ").png"; //link images related to dead
    deadSound.pause();
    startSound.pause();
    gameOverSound.play();
}

function reload()
{
    location.reload();//reload page again when Try again button click
}
function start()
{
    location.reload();
}
function intro()
{
    location.reload();
}
function startMusic()
{
    startSound.play();
}
let gameTitle = document.getElementById( "name" );
gameTitle.fadeIn(5000).delay(300);
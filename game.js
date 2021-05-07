// alert("INSTRUCTIONS:
//        1. press the button which is blinked.
//        2. when you enter a new level, press all the buttons in the previous levels including the new level button");

displayAlert();
var buttonColors=["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern = [];
function nextSequence(){
  level++;
  $("h1").text("Level "+ level);
var  randomNumber = Math.floor((Math.random())*4);
var randomChosenColor= buttonColors[randomNumber];

gamePattern.push(randomChosenColor);
$("#"+ randomChosenColor).fadeIn();
$("#" +randomChosenColor).fadeOut();
$("#"+ randomChosenColor).fadeIn();
playSound(randomChosenColor);


//console.log(gamePattern);
}

$(".btn").click(function handler(){
  var userChosenColour= this.id;
  userClickedPattern.push(userChosenColour);
 playSound(userChosenColour);
 animatePress(userChosenColour);
 checkAnswer((userClickedPattern.length)-1);
});

function playSound(name){
  var audio= new Audio("sounds/"+ name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
     setTimeout(function(){
       $("."+currentColor).removeClass("pressed");
     }, 100);


}

$(".bttn").click(nextSequence);
//$(document).keypress(nextSequence);

//$(document).click(nextSequence);
var level=0;

function checkAnswer(currentLevel){

  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
   {
      if(userClickedPattern.length === gamePattern.length)
      {setTimeout(nextSequence,1000);
       userClickedPattern=[];}
    }

  else
  { var wrng= new Audio("sounds/wrong.mp3");
    wrng.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("GAME OVER..! You have cleared "+level + " levels.");
    $("h1").css("fontSize",25);
  //  $("h1").css("fontFamily","cursive");
    $(".container").after("<button class='bttn' id='ide'> restart</button>");
    $(".bttn").click(startOver);



    }
}

function startOver(){
  setTimeout(function(){
  //  document.GetElementById("ide").style.visibility="hidden";
   $(".bttn").remove();
  },200);
  level=0;
  gamePattern =[];
  userClickedPattern=[];
  nextSequence();
}

function displayAlert(){
  var newline= "\r\n";
  var msg="Please read the below instructions before starting the game";
  msg += newline;
  msg += "1.press any key to start the game.";
  msg += newline;
  msg += "2. In the first level, press the button which is flashed";
    msg += newline;
  msg += "3. From the second level, press the flashed button after pressing all the buttons which were flashed in previous levels";
    msg += newline;
    msg += newline;
    msg += newline;
  msg += "This game is just for entertainment purpose 😄. Hope you have fun 💙";
  alert(msg);
}

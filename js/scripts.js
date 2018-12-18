//-------------------Business Logic------------------
function rollDice(){
  var randomRoll = Math.floor(Math.random()*7)
  document.images["die"].src=eval("side"+randomRoll+".src");
  return randomRoll;
};
function Player(score){
  this.score = score;
}
var turnTotal = 0;
var score1 = 0;
var score2 = 0;

var side1 = new Image();
side1.src = "images/1.png";
var side2 = new Image();
side2.src = "images/2.png";
var side3 = new Image();
side3.src = "images/3.png";
var side4 = new Image();
side4.src = "images/4.png";
var side5 =  new Image();
side5.src = "images/5.png";
var side6 = new Image();
side6.src = "images/6.png";

Player.prototype.diceGame = function(rollDice){
  if (randomRoll == 1) {
    turnTotal = 0;
    $(".turnTotal1").text(turnTotal);
    $(".diceRoll .noScore").show();
    $("#p1").addClass("disableDiv");
    $("#p2").removeClass("disableDiv");
    $(".player2area #turnPlayer2").show();
    return false
  } else {
    $("alert").text("");
    turnTotal += randomRoll;
    (".turnTotal1").text(turnTotal);
    return true;
  }
}



//------------------User Interface Logic-------------------
$(document).ready(function(){
  $("#intro-form form").submit(function(event){
    $("#p2").addClass("disableDiv");
    var players = ["player1","player2"]

    players.forEach(function(playername) {
      var userInput = $("input#" + playername).val();
      $("." + playername).text(userInput);
    });

    //$("#intro-form").hide();
    $("#game").show();

    event.preventDefault();
  });

//Pass Turn Buttons
  $("#game #passbutton1").click(function(event){
    $("#p1").addClass("disableDiv");
    $("#p2").removeClass("disableDiv");
    $(".player2area #turnPlayer2").show();
  });
  $("#game #passbutton2").click(function(event){
    $("#p2").addClass("disableDiv");
    $("#p1").removeClass("disableDiv");
    $(".player1area #turnPlayer1").show();
  });

//Roll Dice Buttons

  $(".player1area #die1").click(function(){
    $("#p2").addClass("disableDiv");
    var diceFace1 = rollDice();
    score1 += diceFace1;
    $(".score1").text(score1);
    //turnTotal = randomRoll;
    $(".turnTotal1").text(diceFace1);
    alert (diceFace1);
  });
  $(".player2area #die2").click(function(){
    $("#p1").addClass("disableDiv");
    var diceFace2 = rollDice();
    score2 += diceFace2;
    $(".score2").text(score2);
    //turnTotal = randomRoll;
    $(".turnTotal2").text(diceFace2);
    alert (diceFace2);

  });



});

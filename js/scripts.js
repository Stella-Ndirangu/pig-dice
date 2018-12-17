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
});

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

function rollDice(){
  var randomRoll = Math.floor(Math.random()*7)
  document.images["die"].src=eval("side"+randomRoll+".src");
};

$(document).ready(function(){
  $("#game #passbutton1").click(function(event){
    $("#p1").addClass("disableDiv");
    $("#p2").removeClass("disableDiv");
  });
});

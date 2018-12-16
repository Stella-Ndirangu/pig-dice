$(document).ready(function(){
  $("#intro-form form").submit(function(event){
    var players = ["player1","player2"]

    players.forEach(function(playername) {
      var userInput = $("input#" + playername).val();
      $("." + playername).text(userInput);
    });

    $("#intro-form").hide();
    $("#game").show();
    event.preventDefault();
  });
});

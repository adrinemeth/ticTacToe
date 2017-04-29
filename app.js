$(document).ready(function() {
  var player;

  $(".choose-button").on("click", chooserFunction);
  $(".play-button").on("click", function(){
    $(this).hide();
    ticTacToe();
  });

  function chooserFunction() {
    if ($(this).val() === "X") {
      player = "X";

    } else {
      player = "O";
    }
  };

  function ticTacToe() {
    var fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (player === "X") {
      $(".field").on("click", playerX);
    } else {
      $(".field").on("click", playerO);
    }

    function computerMove(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function playerX() {
      $(this).html('<p>X</p>');
      fields.splice(fields.indexOf(+$(this).attr('id')), 1);
      var rand = fields[Math.floor(Math.random() * fields.length)];
      fields.splice(fields.indexOf(rand), 1);
      $("#" + rand).html('<p>O</p>');
      $(this).off("click");
      $("#" + rand).off("click");
    }

    function playerO() {
      $(this).html('<p>O</p>');
      fields.splice(fields.indexOf(+$(this).attr('id')), 1);
      var rand = fields[Math.floor(Math.random() * fields.length)];
      fields.splice(fields.indexOf(rand), 1);
      $("#" + rand).html('<p>X</p>');
      $(this).off("click");
      $("#" + rand).off("click");
    }
    $(".reset").on("click", function() {
      $('.field').html("");
      $(".play-button").show();
    });

  };
});
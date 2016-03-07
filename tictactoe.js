var x=true;
var board = [0,0,0,
             0,0,0,
             0,0,0];
var numberOfTurnsLeft = 9;
var stop;

// var nameO = document.getElementById("#nameinputO");
// var nameX = document.getElementById("#nameinputX");


function doItWithX(td, rowOffset) {
  td.append("<img src='X.png'/>");
  td.unbind('click');
  board[td.index()+rowOffset] = 1;
};
// a function to change a blank table data box to O img
function doItWithO(td, rowOffset) {
  td.append("<img src='O.png'/>");
  td.unbind('click');
  board[td.index() + rowOffset] = -1;
};

function placeMarker(tdId, rowOffset){
  if (x===true){
    doItWithX($("#"+tdId), rowOffset);
    x = false;
  }
  else {
    doItWithO($("#"+tdId), rowOffset);
    x = true;
  }
};

function gameCounter () {
  numberOfTurnsLeft= numberOfTurnsLeft-1;
  console.log(numberOfTurnsLeft);

  if(numberOfTurnsLeft===0) {
  $("#header").html("Game Over!");
  }
};

function stopClicking () {
  if (stop===true) {
    // alert("stop");
  $(".tableData").unbind('click'); }
};

// function tallyWins () {
//
//
// }

// function myFunction() {
//     document.getElementById("frm1").submit();
// }
//
// function myFunction() {
//     document.getElementById("frm2").submit();
// }


//  jquery
$(document).ready(function(){
var nameO = document.getElementById("#nameinputO");
  // Updates scoreboard
  // var player1score = 0
  // var player2score = 0
  // $("#player1score").text(player1score)
  // $("#player2score").text(player2score)

//  jquery
$(document).ready(function(){
  //functions to click on specific boxes and game counter function
  $("#0").click(function(){
    rowOffset = 0;
    placeMarker("0", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#1").click(function(){
    rowOffset = 0;
    placeMarker("1", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#2").click(function(){
    rowOffset=0;
    placeMarker("2", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#3").click(function(){
    rowOffset = 3;
    placeMarker("3", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#4").click(function(){
    rowOffset = 3;
    placeMarker("4", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#5").click(function(){
    rowOffset = 3;
    placeMarker("5", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#6").click(function(){
    rowOffset = 6;
    placeMarker("6", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#7").click(function(){
    rowOffset = 6;
    placeMarker("7", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  $("#8").click(function(){
    rowOffset=6;
    placeMarker("8", rowOffset);
    whoWon(board);
    gameCounter();
    stopClicking();
  });

  // function to add array index postions to determine a winner
  function sumElements(arr, index0, index1, index2) {
    return arr[index0] + arr[index1] + arr[index2];
  };

  function whoWon(arr){
    if (sumElements(arr, 0, 1, 2) === -3){
      $("#header").html(Document.getElementById(nameinputX) + " Won!");
      stop= true;
    }
    else if (sumElements(arr, 3, 4, 5) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 6, 7, 8) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 0, 3, 6) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 1, 4, 7) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 2, 5, 8) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 0, 4, 8) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 2, 4, 6) === -3){
      $("#header").html("O Won!");
      stop= true;
    }
    else if (sumElements(arr, 0, 1, 2) === 3) {
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 3, 4, 5) === 3){
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 6, 7, 8) === 3){
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 0, 3, 6) === 3){
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 1, 4, 7) === 3){
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 2, 5, 8) === 3){
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 0, 4, 8) === 3){
      $("#header").html("X Won!");
      stop= true;
    }
    else if (sumElements(arr, 2, 4, 6) === 3){
      $("#header").html("X Won!");

      stop= true;
    }

     else ("");

  };


});



//this makes the submit name button a click function. and changes the input from the text box into the h2 header. it then hides text box and button after clicking submit.
 // $("#submit1").click(function(){
 //
 //    var player1 = $("#player1").val();
 //
 //    $("#player1").hide();
 //    $("#player1header").text(player1);
 //    $("#submit1").hide();
 //
 //  });
 //
 //  $("#submit2").click(function(){
 //
 //    var player2 = $("#player2").val();
 //    $("#player2").hide();
 //    $("#player2header").text(player2);
 //    $("#submit2").hide();
 //
 //  });
 //
 //  $("#like").click(function(){
 //  alert("Thanks!")
 //  });



//when the board is full disable game and alert that the game is over
});

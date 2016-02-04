var x=true;


function doItWithX(element) {
  element.append("<img src ='X.png'/>");
  element.unbind('click');
};
// a function to change a blank table data box to O img
function doItWithO(element) {
  element.append("<img src = 'O.png'/>");
  element.unbind('click');
};

function placeMarker(element){
  if (x===true){
    doItWithX(element);
    x = false;
  }
  else {
    doItWithO(element);
    x = true;
  }
};

var numberOfTurnsLeft = 9;
function gameCounter () {
  numberOfTurnsLeft= numberOfTurnsLeft-1;
  console.log(numberOfTurnsLeft);

  if(numberOfTurnsLeft===0) {
  $("#header").html("Game Over!");
  }
};


//  jquery
$(document).ready(function(){

  $("#tableData1").click(function(){
    placeMarker($("#tableData1"));
    gameCounter();
  });
  $("#tableData2").click(function(){
    placeMarker($("#tableData2"));
    gameCounter();
  });
  $("#tableData3").click(function(){
    placeMarker($("#tableData3"));
    gameCounter();
  });
  $("#tableData4").click(function(){
    placeMarker($("#tableData4"));
    gameCounter();
  });
  $("#tableData5").click(function(){
    placeMarker($("#tableData5"));
    gameCounter();
  });
  $("#tableData6").click(function(){
    placeMarker($("#tableData6"));
    gameCounter();
  });
  $("#tableData7").click(function(){
    placeMarker($("#tableData7"));
    gameCounter();
  });
  $("#tableData8").click(function(){
    placeMarker($("#tableData8"));
    gameCounter();
  });
  $("#tableData9").click(function(){
    placeMarker($("#tableData9"));
    gameCounter();

  });

//when the board is full disable game and alert that the game is over

















});

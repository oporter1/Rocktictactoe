var board = [0,0,0,
            0,0,0,
            0,0,0];

__________________________________________________
// sumElements
// takes an array, and three indices
// return the sum of the elements with the given indices
function sumElements(array, index0, index1, index2) {
  return array[index0] + array[index1] + array[index2];
}

// if doItWithX != 3
//   return "You Won!";
// if doItWithO !=3
//   return "You Won!"
__________________________________________________
// whoWon takes ...the board
// and returns X... if ...there are 3 X's in a row
// and returns O... if ...there are 3 O's in a row
// and return null... otherwise.
function whoWon (board){
  if (sumElements(board, 0, 1, 2) === -3){
    alert("You Won!");
  }
  if (sumElements(board, 3, 4, 5) === -3){

  }
  if (sumElements(board, 6, 7, 8) === -3){

  }
  if (sumElements(board, 0, 3, 6) === -3){

  }
  if (sumElements(board, 1, 4, 7) === -3){

  }
  if (sumElements(board, 2, 5, 8) === -3){

  }
  if (sumElements(board, 0, 4, 8) === -3){

  }
  if (sumElements(board, 2, 4, 6) === -3){

  }
}

function whoWon (board){
  if (sumElements(board, 0, 1, 2) === 3) {
    return "Y";
  }
  if (sumElements(board, 3, 4, 5) === 3){
    return "Y";
  }
  if (sumElements(board, 6, 7, 8) === 3){
    return "Y";
  }
  if (sumElements(board, 0, 3, 6) === 3){
    return "Y";
  }
  if (sumElements(board, 1, 4, 7) === 3){
    return "Y";
  }
  if (sumElements(board, 2, 5, 8) === 3){
    return "Y";
  }
  if (sumElements(board, 0, 4, 8) === 3){
    return "Y";
  }
  if (sumElements(board, 2, 4, 6) === 3){
    return "Y";
  }
}

function whoWon (board){
  if (sumElements(board, 0, 1, 2) != 3){
    return "Wrong";
  };
  function whoWon (board){
    if (sumElements(board, 0, 1, 2) != -3) {
      return "Wrong";
    };



___________________________________________
//then we compare the sum of the numbers to 3
if x=3 or -3 then you won
or if Y is = to 3 or -3 then you won





if

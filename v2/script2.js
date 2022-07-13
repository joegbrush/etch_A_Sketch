let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let index = 0; index < amount; index++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
    board.addEventListener;
  }
}

populateBoard(16);

function changeSize(input) {
  let error = document.querySelector(".error");
  if (input >= 2 && input <= 100) {
    populateBoard(input);
    error.textContent = "";
  } else {
    error.textContent = "Error, enter a number 2-100.";
  }
}

function changeColor(choice) {
  color = choice;
}

function squareColor() {
  if (choice == "black") {
    color = "black";
  } else if (choice == "random") {
    color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  } else if (color == "white") {
    color = "white";
  }
}

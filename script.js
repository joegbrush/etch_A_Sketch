//Etch A Sketch Script

let color = "black";

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let index = 0; index < amount; index++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorsquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(24);

function changeSize(input) {
  let error = document.querySelector(".error");
  if (input >= 2 && input <= 100) {
    populateBoard(input);
    error.textContent = "";
  } else {
    error.textContent = "Error, enter more than 2 and less than 100.";
    console.log("Error, input more than 2 or less than 100.");
  }
}

function colorsquare() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 369}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

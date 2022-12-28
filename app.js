document.addEventListener("DOMContentLoaded", function(){
  createBoard(16);

  let btnPopup = document.querySelector("#popup");
  btnPopup.addEventListener("click", function(){
    let size = getSize();
    createBoard(size);
  })
})

function createBoard(size){
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i=0; i < numDivs; i++){
    let div = document.createElement("div");
    div.style.backgroundColor = 'yellow';
    board.insertAdjacentElement('afterbegin', div);
  }
}

function getSize(){
  let choice = prompt("Choose the size you want");
  let message = document.querySelector("#message")
  if(choice == ""){
      message.innerHTML = 'Please provide a number';
  }
  else if(choice < 0 || choice > 100){
    message.innerHTML = 'Provide a number between 1 and 100';
  }
  else {
    message.innerHTML = 'Board ready, enjoy';
    return choice
  }
}

// function makeBlocks() {
//   for (var i = 0; i < 16; i++) {
//       var row = document.createElement('div');
//       row.className = "row";
//       for (var j = 0; j < 16; j++) {
//           var box = document.createElement('div');
//           box.className = "box";
//           row.appendChild(box);
//       }
//       document.getElementById('boxParent').appendChild(row);
//   }
// }

// makeBlocks();

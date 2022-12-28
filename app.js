document.addEventListener("DOMContentLoaded", function(){
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = "repeat(16, 1fr)";
  board.style.gridTemplateRows = "repeat(16, 1fr)";
})

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

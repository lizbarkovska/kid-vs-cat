let currentPlayer = '🐶';
let row0 = ['🐶', '', '😼'];
let row1 = ['🐶', '', '😼'];
let row2 = ['🐶', '', '😼'];
let currentPlayerDisplay = document.querySelector('h1')
let tableDisplay = document.querySelector('table')
function render() {
  currentPlayerDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
  tableDisplay.innerHTML = `<tr>
      <td>${row0[0]}</td>
      <td>${row0[1]}</td>
      <td>${row0[2]}</td>
    </tr>
  
    <tr>
      <td>${row1[0]}</td>
      <td>${row1[1]}</td>
      <td>${row1[2]}</td>
    </tr>
  
    <tr>
      <td>${row2[0]}</td>
      <td>${row2[1]}</td>
      <td>${row2[2]}</td>
    </tr>`;
   

}
let checkwinner = () => {
  // row 0 horizontal
  if (
    row0[0] === row0[1] && row0[1] === row0[2] 
    && row0[0] !== ''
    ) {
      return row0[0]
    }
    
     // row 1 horizontal
  if (
    row1[0] === row1[1] && row1[1] === row1[2] 
    && row1[0] !== ''
    ) {
      return row1[0]
    }

     // row 2 horizontal
  if (
    row2[0] === row2[1] && row2[1] === row2[2] 
    && row2[0] !== ''
    ) {
      return row2[0]
    }

    // column 0 vertical    
  if (
    row0[0] === row1[0] && row1[0] === row2[0] 
    && row0[0] !== ''
    ) {
      return row0[0]
    }

    // column 1 vertical  
  if (
    row0[1] === row1[1] && row1[1] === row2[1] 
    && row0[1] !== ''
    ) {
      return row0[1]
    }

    // column 2 vertical  
  if (
    row0[2] === row1[2] && row1[2] === row2[2] 
    && row0[2] !== ''
    ) {
      return row0[2]
    }

    // left to right diagonal
  if (
    row0[0] === row1[1] && row1[1] === row2[2] 
    && row0[0] !== ''
    ) {
      return row0[0]
    }

    // right to left diagonal
  if (
    row0[2] === row1[1] && row1[1] === row2[0] 
    && row0[2] !== ''
    ) {
      return row0[2]
    } 
  
 return '';


};
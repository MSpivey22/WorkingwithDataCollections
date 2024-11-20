// Part 1" Refactoring

// Variables
let currentCell = "";
let currentRow = [];
    const rows = [];

    
// Function to add a cell to the current row
const addCell = () => {
    currentRow.push(currentCell.trim());
    currentCell = "";
  };

//Function to log the row
 const addRow = () => {
    if (currentRow.length > 0) {
      rows.push([...currentRow]);
      console.log(currentRow.join(', '));
      currentRow = [];
    }
  };

 // Main loop
 for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];
 }

//If there's a comma, add the cell to the current row
if (char === ',') {
    addCell();
}

//If a newline character is found, finalize current row
else if (char === '\n') {
    addCell()
    addRow()
}

  // If regular character, add it to the current cell
  else {
    currentCell += char;
  }
}

// Handle the last row (if it ends without a newline)
if (currentCell !== "") {
  addCell();
  addRow();
}

return rows; // Return the parsed rows as an array of arrays for further processing if needed
}

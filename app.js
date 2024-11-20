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

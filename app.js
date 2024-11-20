// Part 1: Refactoring

//Refactored parseCSV function
function parseCSV(csvString)

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

//Last row- if no newline
if (currentCell !== "") {
    addCell();
    addRow();
}
return rows; 


//Part 2: Expanding Functionality

//Function to parse a CSV string and return a 2D array
function parseCSV(csvString)

//Declare Variables
let currentCell = "";
let currentRow = [];
const rows = [];
let numberOfColumns = 0;

// Function to add a cell to current row
const addCell = () => {
    currentRow.push(currentCell.trim());
    currenCell ="";
}

//Function to store row and Number of columns based on first row header
const addRow = () => {
    if (currentRow.length > 0) {
        if (rows.length === 0) {
            numberOfColumns = currentRow.length;
}
    }
}
rows.push([...currentRow]);
currentRow = []

//Store the 2D array
const cachedData = rows; 
console.log("Parsed CSV Data (2D Array):", cachedData);
return cachedData


//Part 3: Transforming Data
// Function to transform CSV rows into objects
function transformToObjects(parsedData)

//Header row- all lowercase
const headers = parsedData[0].map((header) => header.toLowerCase());
const result =[]

//Loop through each row- skipping header
for (let i = 1; i < parsedData.length; i++) {
    const row = parsedData[i];
    const rowObject = {};
}

//Create an object using headers as keys and row values as values
headers.forEach((key, index) => {
    rowObject[key] = row[index];
  });

  // Add the created object to the result array
  result.push(rowObject);
}

console.log("Transformed Data (Array of Objects):", result);
return result;
}

//Part 4: Sorting and Manipulating Data

/*Sample Data:
 let people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }

]; */

//Remove the last element from the sorted array
people.pop();

//Insert a new object at index 1:
const newPerson1 = { id: "48", name: "Barry", occupation: "Runner", age: "25"};
people.splice(1,0,newPerson1);

//Add a new object to the end of the array
const newPerson2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
people.push(newPerson2);
    console.log("Updated Array of People:", people);

// Step 4: Calculate the average age using a loop and convert age to number before adding
let totalAge = 0;
for (let i = 0; i < people.length; i++) {
  totalAge += Number(people[i].age);
}
const averageAge = totalAge / people.length;

// Logging the calculated average age
console.log("Average Age of the Group:", averageAge.toFixed(2));

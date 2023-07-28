// Initialize an array to store records
let records = [];

// Function to display records in the list
function displayRecords() {
  const recordsList = document.getElementById("records");
  recordsList.innerHTML = "";
  
  records.forEach((record) => {
    const listItem = document.createElement("li");
    listItem.innerText = `Name: ${record.name}, Email: ${record.email}`;
    recordsList.appendChild(listItem);
  });
}

// Function to handle save button click
function handleSave() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please enter both name and email.");
    return;
  }

  // Create a new record object
  const newRecord = { name, email };
  records.push(newRecord);

  // Clear input fields
  nameInput.value = "";
  emailInput.value = "";

  // Display updated records
  displayRecords();
}

// Attach the handleSave function to the save button
const saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", handleSave);

// Display initial records
displayRecords();

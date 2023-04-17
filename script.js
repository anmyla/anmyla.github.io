//I wrote this part of the script based on what we learned :) .

var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Likes: " + count;

};



// I wanted such a function and I imagine it in my head but I am not
// knowledgeable enough to code it so I googled a similar code and then
// I adjust the code to fit the purpose.


//Get references to the form and table elements
const form = document.querySelector('form');
const table = document.querySelector('table');

// Add an event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent the default form submit behavior
  event.preventDefault();

  // Get the input values
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const pledge = document.querySelector('#pledge').value.trim();

  // Validate the input values
  if (name === '' || email === '' || pledge === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new table row
  const row = document.createElement('tr');

  // Add the name, email, and pledge to the row
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  row.appendChild(nameCell);

  const emailCell = document.createElement('td');
  emailCell.textContent = email;
  row.appendChild(emailCell);

  const pledgeCell = document.createElement('td');
  pledgeCell.textContent = pledge;
  row.appendChild(pledgeCell);

  // Add the row to the table
  table.querySelector('tbody').appendChild(row);

  // Clear the form input values
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#pledge').value = '';
});

 





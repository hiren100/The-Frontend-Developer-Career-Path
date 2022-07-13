tbody = document.getElementById('countries');
saveEdit = document.getElementById('saveEdit');

countries = [];

console.log(countries)


function Add(){
  input = document.getElementById('add-name');
  // Get the value
  var country = input.value;

  if (country) {
    // Add the new value
    this.countries.push(country.trim());
    // Reset input value
    input.value = '';
    // Dislay the new list
    Render();
  }
}


function Render() {
  var data = '';

  if (countries.length > 0) {
    for (i = 0; i < countries.length; i++) {

      data+= `
        <tr>
        <td width='60%'> ${countries[i]}  </td>
        <td width='20%'><button onclick="Edit(${i})"><i class="fa fa-pencil" aria-hidden="true"></i></button></td>
        <td width='20%'><button onclick="Delete(${i})"><i class="fa fa-times-circle" aria-hidden="true"></i></button></td>
        </tr>     
      `
    }
  }
  return tbody.innerHTML = data;
};


function Delete (item) {
  // Delete the current row
  this.countries.splice(item, 1);
  // Display the new list
  Render();
};


const inputEdit = document.getElementById('edit-name');
function Edit(item){
  // Display value in the field
  console.log(countries[item])
  inputEdit.value = countries[item];
  // Display fields
  document.getElementById('spoiler').style.display = 'block';

  saveEdit.onsubmit = function() {
    // Get value
    var country = inputEdit.value;
  
    if (country) {
      // Edit value
      countries.splice(item, 1, country.trim());
      // Display the new list
      Render();
      // Hide fields
      CloseInput();
    }
  }
}

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
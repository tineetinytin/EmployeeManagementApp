// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let employees = document.querySelector('#employees');

let empCount    = document.querySelector('#empCount');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();
  

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let extension = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employees.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('BUTTON');
    deleteBtn.className = "btn btn-danger btn-sm delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    document.querySelector('#addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.value = `(${count})`;

});

// DELETE EMPLOYEE
employees.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure you want to delete this employee?')) {
            employees.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count--;
            empCount.value = `(${count})`;
        }
    }

});
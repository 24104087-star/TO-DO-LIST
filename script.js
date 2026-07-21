function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML =
        `<button onclick="deleteStudent(this)">Delete</button>`;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

function deleteStudent(button) {
    let row = button.parentNode.parentNode;
    row.remove();
}
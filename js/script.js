let todoList = [];
const tableBody = document.getElementById("table-body");

function showTable() {
    todoList.forEach((item, index) => {
        tableBody.innerHTML += `
        <tr id="tr-${index}">
            <td>${item.list}</td>
            <td>${item.time}</td>
            <td id="td-action">
                <button onclick="deleteRow(${index})" class="btn" style="background-color: rgb(228, 68, 68);">Delete</button>
            </td>
        </tr>
        `;
    });
    
}

function addList() {
    let todo = document.getElementById("todoInput").value;
    let date = document.getElementById("todoDate").value;

    if (todo === "" || date === "") {
        alert("Please fill in both fields.");
        return;
    }

    todoList.push({list: todo,time: date });
    tableBody.innerHTML = "";
    showTable();
    document.getElementById("todoInput").value = "";
    document.getElementById("todoDate").value = "";
    

}

function deleteAll() {
    todoList.length = 0;
    tableBody.innerHTML = "";
}

function deleteRow(index) {
    document.getElementById(`tr-${index}`).remove();
    todoList.splice(index, 1);   
}

function filterDate() {
    let filter = document.querySelector("#filter-container input").value;
    let filteredList = todoList.filter(item => item.time.includes(filter) || item.list.includes(filter));
    tableBody.innerHTML = "";
    filteredList.forEach((item, index) => {
        tableBody.innerHTML += `
        <tr id="tr-${index}">
            <td>${item.list}</td>
            <td>${item.time}</td>
            <td id="td-action">
                <button onclick="deleteRow(${index})" class="btn" style="background-color: rgb(228, 68, 68);">Delete</button>
            </td>
        </tr>
        `;
    });

}
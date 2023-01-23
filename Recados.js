let logged = JSON.parse(sessionStorage.getItem("logged"));
const allUsers = JSON.parse(localStorage.getItem("allUsers"));
const table = document.getElementById("table-body");


document.getElementById("botao-salvar").addEventListener("click", function (e) {
    e.preventDefault()

    addErrand();

    const description = document.getElementById("texto-1").value = "";
    const detail = document.getElementById("texto-2").value = "";
})

function checkLogged() {

    if (!logged) {
        window.location.href = "Home.html";
    }
}

function addErrand() {
    const description = document.getElementById("texto-1");
    const detail = document.getElementById("texto-2");

    const newErrand = {
        description: description.value,
        detail: detail.value
    };

    logged.errands.push(newErrand);

    saveData();
    renderTable();
}

function saveData() {
    sessionStorage.setItem("logged", JSON.stringify(logged));

    const findUser = allUsers.findIndex(
        (user) => user.email === logged.email
    );

    allUsers[findUser] = logged;

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

function deleteErrand(index) {
    logged.errands.splice(index, 1);
    saveData();
    renderTable();
}

function editErrand(index){
    let editDescription = confirm("Editar descrição?");

    if (editDescription == true){
        const newDescription = prompt("Informe a nova descrição: ");
        logged.errands[index].description = newDescription;
    }
    
    let editDetail = confirm("Editar detalhamento?");

    if(editDetail == true){
        const newDetail = prompt("Informe o novo detalhamento: ");
        logged.errands[index].detail = newDetail;
    }
   

    saveData();
    renderTable();

}

function renderTable() {
    table.innerHTML = "";
    logged.errands.map((value, index) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const deleteButton = document.createElement("button");
        const editButton = document.createElement("button");

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td4.appendChild(deleteButton);
        td4.appendChild(editButton);

        deleteButton.setAttribute("onclick", `deleteErrand(${index})`);
        deleteButton.setAttribute("class", `botao-apagar`);
        editButton.setAttribute("onclick", `editErrand(${index})`);
        editButton.setAttribute("class", `botao-editar`);

        td1.innerHTML = index + 1;
        td2.innerHTML = value.description;
        td3.innerHTML = value.detail;
        deleteButton.innerHTML = "Apagar";
        editButton.innerHTML = "Editar";

        table.appendChild(tr);
    })
}

function logout() {
    sessionStorage.removeItem("logged");

    localStorage.removeItem("user");

    window.location.href = "Home.html"
}


checkLogged();
renderTable();
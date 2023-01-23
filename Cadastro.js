const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

document.getElementById("save").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("e-mail").value;
    const password = document.getElementById("senha").value;
    const password_confirm = document.getElementById("c-senha").value;
   
    
    if(email.length < 6){
        alert('Preencha o campo com um e-mail válido.');
        return;
    }

    const checkUser = allUsers.find((user) => user.email == email);
        if (checkUser) {
         alert("Email ja cadastrado");
         return;
        }

    if (password.length < 5){
        alert('Crie uma senha com no mímino 5 dígitos.');
        return;
    }

    if(password != password_confirm){
        alert("As senhas digitadas são diferentes.");
        return;
    }

    const newUser = {
        email: email,
        password: password,
        errands: [],
      };

      allUsers.push(newUser);
    

    alert('Conta criada com sucesso.');

    saveAccount();

    window.location.href="home.html";
})

function saveAccount(){
   localStorage.setItem("allUsers", JSON.stringify(allUsers));
}

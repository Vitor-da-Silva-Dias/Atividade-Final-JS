
document.getElementById("login").addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("Senha");

    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    console.log(allUsers);
    
    function login() {
      const checkUser = allUsers.find(
        (user) =>
          user.email === email.value && user.password === password.value
      );

      const findUserIndex = allUsers.findIndex(
        (user) => user.email === email.value
      );

      if (!checkUser) {
        alert("Email ou senha incorreta");
        return;
      }

      alert('Login realizado com sucesso.')

      sessionStorage.setItem("logged", JSON.stringify(checkUser));
      window.location.href = "Recados.html";
    }

    login();
})



const userName = document.getElementById('user')
const userPassWord = document.getElementById('passWord')

const login = document.getElementById("login");
login.addEventListener("click", () => {

    if (userPassWord.value == "Scrobote" && userName.value == "Eduardo") {
        return window.location.href = "../html/paginaPrincipal.html", alert("Logado com sucesso")
    } 
    else {
        return "Login ou senha invalidos"
    }
});



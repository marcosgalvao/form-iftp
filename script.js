// Banco de dados com variaveis globais
var email_bd = "marcosgalvao11@gmail.com";
var senha_bd = "123";

// função que inicia o processo de login
function logar() {

    // variaveis locais
    let email_input = document.getElementById("email").value;
    let senha_input = document.getElementById("senha").value;
    let erro_senha = document.getElementById("erro-senha");
    let erro_email = document.getElementById("erro-email");

    
    // validar dados
    if (senha_input === senha_bd && email_input === email_bd) {
        window.location.href = "home.html";
    } else {
        if (senha_input !== senha_bd) {
            erro_senha.textContent = "Senha não confere!";
        } 
        if (email_input !== email_bd) {
            erro_email.textContent = "Email não confere";
        }
    }



    
}
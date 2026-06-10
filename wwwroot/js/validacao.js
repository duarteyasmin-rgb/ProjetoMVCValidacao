const formulario = document.getElementById("formulario");
const erro = document.getElementById("erro");

formulario.addEventListener("submit", function (event) {

    erro.textContent = "";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = Number(document.getElementById("idade").value);

    if (nome === "") {
        event.preventDefault();
        erro.textContent = "O nome não pode estar vazio.";
        return;
    }

    if (!email.includes("@")) {
        event.preventDefault();
        erro.textContent = "O e-mail deve conter @.";
        return;
    }

    if (idade <= 0) {
        event.preventDefault();
        erro.textContent = "A idade deve ser maior que 0.";
        return;
    }

    alert("Formulário enviado com sucesso!");
});
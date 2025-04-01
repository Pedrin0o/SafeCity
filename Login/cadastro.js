// Validação da Data de Nascimento
function validateDOB() {
    const dobInput = document.getElementById("dob");
    const dobError = document.getElementById("dobError");

    const currentDate = new Date();
    const birthDate = new Date(dobInput.value);
    const currentYear = currentDate.getFullYear();
    const birthYear = birthDate.getFullYear();
    
    const minAge = 7;
    const maxAge = 100;
    const age = currentYear - birthYear;

    // Verifica se a idade está dentro dos limites e se a data não está no futuro
    if (age < minAge || age > maxAge || birthDate > currentDate || isNaN(birthDate.getTime())) {
        dobError.style.display = "block"; // Exibe a mensagem de erro
        dobInput.value = ""; // Limpa o campo para o usuário preencher novamente
    } else {
        dobError.style.display = "none"; // Esconde a mensagem caso a data seja válida
    }
}

// Validação do Email
function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    // Expressão regular para validar e-mails
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = "block"; // Exibe a mensagem de erro
        emailInput.value = ""; // Limpa o campo para o usuário preencher novamente
    } else {
        emailError.style.display = "none"; // Esconde a mensagem caso o e-mail seja válido
    }
}

// Validação da Senha
function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    // Expressão regular para verificar se a senha contém pelo menos uma letra e um número
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).+$/;

    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.style.display = "block"; // Exibe a mensagem de erro
        passwordInput.value = ""; // Limpa o campo para o usuário preencher novamente
    } else {
        passwordError.style.display = "none"; // Esconde a mensagem caso a senha seja válida
    }
}

// Função para mostrar/esconder o campo de ID do Administrador
function toggleAdminId() {
    const role = document.getElementById("role").value;
    const adminIdField = document.getElementById("admin-id");

    if (role === "administrador") {
        adminIdField.style.display = "block"; // Exibe o campo ID do Administrador
    } else {
        adminIdField.style.display = "none"; // Esconde o campo ID
    }
}

// Validação do Formulário no Envio
function validateForm() {
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const adminId = document.getElementById("adminId").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validação do CPF (Apenas números, 11 dígitos)
    const cpfPattern = /^\d{11}$/;
    if (!cpfPattern.test(cpf)) {
        alert("Por favor, insira um CPF válido com 11 dígitos.");
        return false;
    }

    // Validação do ID do Administrador (se aplicável)
    if (document.getElementById("role").value === "administrador" && adminId !== "123") {
        alert("ID do Administrador inválido.");
        return false;
    }

// Validação da Senha
function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");

    // Expressão regular para validar pelo menos 2 letras e 2 números
    const passwordPattern = /^(?=(.*[A-Za-z]){2,})(?=(.*\d){2,}).{4,}$/;

    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.style.display = "block"; // Exibe a mensagem de erro
        passwordInput.value = ""; // Limpa o campo para o usuário preencher novamente
    } else {
        passwordError.style.display = "none"; // Esconde a mensagem caso a senha seja válida
    }
}

}

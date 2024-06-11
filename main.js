// função show/hidden da senha
const show_pw_btn = document.querySelector('#show-passwd');
const show_pw_icon = document.querySelector('#show-passwd img');
const pw_input = document.querySelector('#password');

show_pw_btn.addEventListener('click', () => {
    pw_input.type = pw_input.type === 'password' ? 'text' : 'password';
    
    show_pw_icon.src = show_pw_icon.src.includes('eye-open.png') ? 'eye-icons/eye-close.png' : 'eye-icons/eye-open.png';
});

function cadastrarConta() {
    const name = document.getElementById('name').value;
    const lname = document.getElementById('lname').value;
    const cep = document.getElementById('name').value;
    const adressNumber = document.getElementById('adress-number').value;
    const adress = document.getElementById('adress').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // verifica se o checkbox de termos está marcado
    const termsAccepted = document.querySelector('.check-bx').checked;

    // verifica se todos os campos estão prenchidos e o checkbox está marcado
    if (name && lname && cep && adressNumber && adress && city && email && password && termsAccepted) {
        // armazena os dados no localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('lname', lname);
        localStorage.setItem('cep', cep);
        localStorage.setItem('adressNumber', adressNumber);
        localStorage.setItem('adress', adress);
        localStorage.setItem('city', city);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Conta cadastrada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos e aceite os termos e condições');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Preenche os campos com os valores do localStorage (se existirem)
    if (localStorage.getItem('name')) {
        document.getElementById('name').value = localStorage.getItem('name');
    }
    if (localStorage.getItem('lname')) {
        document.getElementById('lname').value = localStorage.getItem('lname');
    }
    if (localStorage.getItem('cep')) {
        document.getElementById('cep').value = localStorage.getItem('cep');
    }
    if (localStorage.getItem('adressNumber')) {
        document.getElementById('adress-number').value = localStorage.getItem('adressNumber');
    }
    if (localStorage.getItem('adress')) {
        document.getElementById('adress').value = localStorage.getItem('adress');
    }
    if (localStorage.getItem('city')) {
        document.getElementById('city').value = localStorage.getItem('city');
    }
    if (localStorage.getItem('email')) {
        document.getElementById('email').value = localStorage.getItem('email');
    }
    if (localStorage.getItem('password')) {
        document.getElementById('password').value = localStorage.getItem('password');
    }
});
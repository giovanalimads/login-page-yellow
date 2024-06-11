// função show/hide senhar
const show_pw_btn = document.querySelector('#show-passwd');
const show_pw_icon = document.querySelector('#show-passwd img');
const pw_input = document.querySelector('#password');

show_pw_btn.addEventListener('click', () => {
    pw_input.type = pw_input.type === 'password' ? 'text' : 'password';
    
    show_pw_icon.src = show_pw_icon.src.includes('eye-open.png') ? 'eye-icons/eye-close.png' : 'eye-icons/eye-open.png';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // captura os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // armazena os valores no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Informações de login salvas!');
});
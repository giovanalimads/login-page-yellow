// função mostrar/esconder senhar
const show_pw_btn = document.querySelector('#show-passwd');
const show_pw_icon = document.querySelector('#show-passwd img');
const pw_input = document.querySelector('#password');

show_pw_btn.addEventListener('click', () => {
    pw_input.type = pw_input.type === 'password' ? 'text' : 'password';
    
    show_pw_icon.src = show_pw_icon.src.includes('eye-open.png') ? 'eye-icons/eye-close.png' : 'eye-icons/eye-open.png';
});
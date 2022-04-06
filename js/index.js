const overflow = document.querySelector('.over');
const btnLogin = document.querySelector('#login');
const modalLogin = document.querySelector('.login');
const btnClose = document.querySelector('.close');



btnLogin.addEventListener('click', () => {
   modalLogin.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})

btnClose.addEventListener('click', () => {
   modalLogin.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})
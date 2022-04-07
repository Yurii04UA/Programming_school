const overflow = document.querySelector('.over');
// login n reg
const btnLogin = document.querySelector('#login');
const modalLogin = document.querySelector('.login');
const btnCloseLog = document.querySelector('.close_log');
const btnCloseReg = document.querySelector('.close_reg');

const btnReg = document.querySelector('#registration') 
const modalReg = document.querySelector('.registration')


// modal
btnLogin.addEventListener('click', () => {
   modalLogin.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})

btnReg.addEventListener('click', () => {
   modalReg.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})

/// btn log n reg
btnCloseLog.addEventListener('click', () => {
   modalLogin.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})

btnCloseReg.addEventListener('click', () => {
   modalReg.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})
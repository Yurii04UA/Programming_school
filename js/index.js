const overflow = document.querySelector('.over');
//  login n reg
const btnLogin = document.querySelector('#login');
const modalLogin = document.querySelector('.login');

const btnReg = document.querySelectorAll('#registration'); 
const modalReg = document.querySelector('.registration');
/// quiz
const btnTest = document.querySelectorAll('.btn_test');
const modalTest = document.querySelector('.quiz');
//close
const btnCloseModal = document.querySelectorAll('.close');


// show modal login reg n test
btnLogin.addEventListener('click', () => {
   modalLogin.classList.toggle('show_modal');
   overflow.classList.toggle('hidden');
   document.querySelector('.circle').classList.toggle('show_modal');
})

btnReg.forEach(e => {
   e.addEventListener('click', () => {
         modalReg.classList.toggle('show_modal');
         overflow.classList.toggle('hidden');
         document.querySelector('.circle').classList.toggle('show_modal');
      })
})

btnTest.forEach(e => {
   e.addEventListener('click', () => {
      modalTest.classList.toggle('show_modal');
      overflow.classList.toggle('hidden');
      document.querySelector('.circle').classList.toggle('show_modal');
   })
})

// close modal
btnCloseModal.forEach(e =>{
   e.addEventListener('click', () => {
         modalLogin.classList.remove('show_modal');
         modalReg.classList.remove('show_modal');
         modalTest.classList.remove('show_modal');
         overflow.classList.remove('hidden');
         document.querySelector('.circle').classList.remove('show_modal');
      })
})



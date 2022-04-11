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


////////// QUIZ
// DATA
DATA = [
   {
      question: 'What does PHP stand for?',
      answer:[
         {
            id: '1',
            value: 'Personal Hypertext Processor',
            correct: false
         },
         {
            id: '2',
            value: 'Private Home Page',
            correct: false
         },
         {
            id: '3',
            value: 'PHP: Hypertext Preprocessor  ',
            correct: true
         },
         {
            id: '4',
            value: 'Personal Hype Preprocessor ',
            correct: false
         },
      ]
   },
   {
      question: 'Inside which HTML element do we put the JavaScript?',
      answer:[
         {
            id: '5',
            value: '<javascript>',
            correct: false
         },
         {
            id: '6',
            value: '<script>',
            correct: true
         },
         {
            id: '7',
            value: '<js>',
            correct: false
         },
         {
            id: '8',
            value: '<scripting>',
            correct: false
         },
      ]
   },
   {
      question: 'How to write an IF statement in JavaScript?',
      answer:[
         {
            id: '9',
            value: 'if i = 5',
            correct: false
         },
         {
            id: '10',
            value: 'if (i == 5)',
            correct: true
         },
         {
            id: '11',
            value: 'if i = 5 then',
            correct: false
         },
         {
            id: '12',
            value: 'if i == 5 then',
            correct: false
         },
      ]
   },
   {
      question: 'What does XML stand for?',
      answer:[
         {
            id: '13',
            value: 'Example Markup Language',
            correct: false
         },
         {
            id: '14',
            value: 'eXtra Modern Link',
            correct: false
         },
         {
            id: '15',
            value: 'eXtensible Markup Language',
            correct: true
         },
         {
            id: '16',
            value: 'X-Markup Language',
            correct: false
         },
      ]
   },
   {
      question: 'What is Git?',
      answer:[
         {
            id: '17',
            value: 'A programming language.',
            correct: false
         },
         {
            id: '18',
            value: 'A remote repository platform.',
            correct: false
         },
         {
            id: '19',
            value: 'A nickname for GitHub.',
            correct: false
         },
         {
            id: '20',
            value: 'A version control system.',
            correct: true
         },
      ]
   },
]
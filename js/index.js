const overflow = document.querySelector(".over");
//  login n reg
const btnLogin = document.querySelector("#login");
const modalLogin = document.querySelector(".login");

const btnReg = document.querySelectorAll("#registration");
const modalReg = document.querySelector(".registration");
/// quiz
const btnTest = document.querySelectorAll(".btn_test");
const modalTest = document.querySelector(".quiz");
//close
const btnCloseModal = document.querySelectorAll(".close");

// show modal login reg n test
btnLogin.addEventListener("click", () => {
  modalLogin.classList.toggle("show_modal");
  overflow.classList.toggle("hidden");
  document.querySelector(".circle").classList.toggle("show_modal");
});

btnReg.forEach((e) => {
  e.addEventListener("click", () => {
    modalReg.classList.toggle("show_modal");
    overflow.classList.toggle("hidden");
    document.querySelector(".circle").classList.toggle("show_modal");
  });
});

btnTest.forEach((e) => {
  e.addEventListener("click", () => {
    modalTest.classList.toggle("show_modal");
    overflow.classList.toggle("hidden");
    document.querySelector(".circle").classList.toggle("show_modal");
  });
});

// close modal
btnCloseModal.forEach((e) => {
  e.addEventListener("click", () => {
    modalLogin.classList.remove("show_modal");
    modalReg.classList.remove("show_modal");
    modalTest.classList.remove("show_modal");
    overflow.classList.remove("hidden");
    document.querySelector(".circle").classList.remove("show_modal");
  });
});

////////// QUIZ
// DATA
DATA = [
  {
    question: "What does PHP stand for?",
    answer: [
      {
        id: "1",
        value: "Personal Hypertext Processor",
        correct: false,
      },
      {
        id: "2",
        value: "Private Home Page",
        correct: false,
      },
      {
        id: "3",
        value: "PHP: Hypertext Preprocessor  ",
        correct: true,
      },
      {
        id: "4",
        value: "Personal Hype Preprocessor ",
        correct: false,
      },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      {
        id: "5",
        value: '"Head"',
        correct: false,
      },
      {
        id: "6",
        value: '"Body" ',
        correct: true,
      },
      {
        id: "7",
        value: '"Footer"',
        correct: false,
      },
      {
        id: "8",
        value: '"HTML"',
        correct: false,
      },
    ],
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answer: [
      {
        id: "9",
        value: "if i = 5",
        correct: false,
      },
      {
        id: "10",
        value: "if (i == 5)",
        correct: true,
      },
      {
        id: "11",
        value: "if i = 5 then",
        correct: false,
      },
      {
        id: "12",
        value: "if i == 5 then",
        correct: false,
      },
    ],
  },
  {
    question: "What does XML stand for?",
    answer: [
      {
        id: "13",
        value: "Example Markup Language",
        correct: false,
      },
      {
        id: "14",
        value: "eXtra Modern Link",
        correct: false,
      },
      {
        id: "15",
        value: "eXtensible Markup Language",
        correct: true,
      },
      {
        id: "16",
        value: "X-Markup Language",
        correct: false,
      },
    ],
  },
  {
    question: "What is Git?",
    answer: [
      {
        id: "17",
        value: "A programming language.",
        correct: false,
      },
      {
        id: "18",
        value: "A remote repository platform.",
        correct: false,
      },
      {
        id: "19",
        value: "A nickname for GitHub.",
        correct: false,
      },
      {
        id: "20",
        value: "A version control system.",
        correct: true,
      },
    ],
  },
];

const quizQustions = document.querySelector(".quiz_qustions");
const quizQustionsItem = document.querySelector(".quiz_qustions_item");
const quizIndicator = document.querySelector(".quiz_indicator");
const quizControls = document.querySelector(".quiz_controls");
const btnNext = document.querySelector(".btn_next");
const quizResults = document.querySelector(".quiz_results");
const quizWrapper = document.querySelector(".quiz_wrapper");
const quiz = document.querySelector(".quiz_question_box");

let results = {};

let currentStep = 0;
console.log(results);


const renderQustion = (index) => {
  renderIndicator(index + 1);
  quizQustions.dataset.currentStep = index;

  const renderAnswer = () => {
    return DATA[index].answer
      .map(
        (answer) =>
          `<li class="quiz_qustions_li">
            <label class="quiz_qustions_label">
               <input class="quiz_qustions_input" type="radio" name=${index} value=${answer.id}>${answer.value}</label>
            </li>`
      )
      .join("");
  };

  quizQustionsItem.innerHTML = `
         <div class="quiz_qustions_item_qustion">${DATA[index].question}</div>
         <ul>${renderAnswer()}</ul>
            
      `;
};

const renderIndicator = (currentStep) => {
  return (quizIndicator.innerHTML = `
   ${currentStep}/${DATA.length}
`);
};
let validNumb = 0
const renderResult = () => {
   
   content = `<div class="text_result"> <p>Good job.
      Your score is <span class="spann">${validNumb}/${DATA.length}</span>.
      But I'm sure you'll learn a lot more in our course.</p></div>`;


  const getClassName = (answer,quIndex) =>{
   let className =''

   if( !answer.correct && answer.id === results[quIndex]){
     className = 'answer_invalid'
   }else if(answer.correct){
     className = 'answer_valid'   
   }

   return className
 }

  const getAnswers = (questionIndex) =>
    DATA[questionIndex].answer
      .map((answer) => `<li class="quiz_qustions_lis ${getClassName(answer,questionIndex)}">${answer.value}</li>`)
      .join('')

  DATA.forEach((question, index) => {
    content += `
      <div class="quiz_qustions_item">
         <div class="quiz_qustions_item_qustion">${question.question}</div>
         <ul>${getAnswers(index)}</ul>
      </div>`;
  });

  quizResults.innerHTML = content + ``
};

quiz.addEventListener("change", (event) => {
  // logic answers
  if (event.target.classList.contains("quiz_qustions_input")) {
    results[event.target.name] = event.target.value;
    btnNext.classList.remove("block");
    renderResult()
  }
});

quiz.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn_next")) {
    const questionIndex = +quizQustions.dataset.currentStep + 1;

    if (DATA.length === questionIndex) {
      // result
      quizWrapper.style = "display:none";
      quizResults.style = "display:block";
      document.querySelector('.quiz').style = 'padding-top: 50px'
      let resultsValue = Object.values(results)
      console.log(resultsValue);
      
      for(let i = 0; i < validAnswers.length; i++){
        if(validAnswers[i]===resultsValue[i]){
          validNumb++
          console.log(validNumb);
        }
      }

// 



      document.querySelector('.text_result').innerHTML = `<p>Good job.
      Your score is <span class="spann">${validNumb}/${DATA.length}</span>.
      But I'm sure you'll learn a lot more in our course.</p>`
    } else {
      renderQustion(questionIndex);
    }
    btnNext.classList.add("block");
  }
});

renderQustion(0);

/// valid answers
const cloneDATA = [...DATA]

let valid =[]
cloneDATA.map(elem => {
  valid.push(...elem.answer)
  
})
const validAnswers = valid.filter(elem => elem.correct).map(elem => elem.id)
console.log(validAnswers);



 

// const a = {
//   0: '2',
//   1: '7',
//   2: '11',
//   3: '15',
//   4: '19'
//   } 

//  const b = {
//    0: '2',
//    1: '8',
//    2: '12',
//    3: '16',
//    4: '18'
// }


// const aValue = Object.values(a)
// const bValue = Object.values(b)
// // console.log(aValue);
// // console.log(bValue.length);
// let count = 0
// for(let i=0; i<bValue.length; i++){
//   if(aValue[i]===bValue[i]){
//     count++
//     console.log(count);
//   }
  
// }
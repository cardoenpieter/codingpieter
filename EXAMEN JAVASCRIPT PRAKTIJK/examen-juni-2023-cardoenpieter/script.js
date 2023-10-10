const questions2 = [
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "The common software-programming acronym &quot;I18N&quot; comes from the term &quot;Interlocalization&quot;.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "The very first recorded computer &quot;bug&quot; was a moth found inside a Harvard Mark II computer.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "MacOS is based on Linux.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "AMD created the first consumer 64-bit processor.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "The first dual-core CPU was the Intel Pentium D.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "medium",
    "question": "A Boolean value of &quot;0&quot; represents which of these words?",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  }
];

const fetchUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean';

/******HARDCODED******
//DOM fetching
let $count = document.getElementById('total-correct');
let $numberQuestion = 0;
let $counterCorrectAnswers = 0;
let $resultContainer = document.getElementById('result-container');
let $question = document.getElementById('question');
let $correctAnswerBtn = document.getElementById('answer-true');
let $wrongAnswerBtn = document.getElementById('answer-false');
const MAXCOUNT = 10;



//CLEAR HTML
function updateCounter() {
  $count.innerHTML = $counterCorrectAnswers;
}

function clearSuccessDanger() {
  const $clearClassSuccess = $resultContainer.querySelector('.result.tag.is-success.is-large');
  if ($clearClassSuccess) {
    $clearClassSuccess.classList.remove('is-success');
    $clearClassSuccess.classList.add('is-dark');
  }
  const $clearClassDanger = $resultContainer.querySelector('.result.tag.is-danger.is-large');
  if ($clearClassDanger) {
    $clearClassDanger.classList.remove('is-danger');
    $clearClassDanger.classList.add('is-dark');
  }
}

function clearQuestion() {
  $question.innerHTML = '';
}


//CLICK FUNCTIONS 
function solveQuestionsClickedTrue() {
  let answerQuestion = questions2[$numberQuestion].correct_answer;
    if (answerQuestion === 'True') {
      isCorrectAnswer();
    } else {
      isWrongAnswer();
    }
  $numberQuestion ++;
  updateCounter();
  setQuestion();
  if ($numberQuestion === MAXCOUNT) {
    writeScore();
    return;
  }
}


function solveQuestionsClickedFalse() {
  let answerQuestion = questions2[$numberQuestion].correct_answer;
    if (answerQuestion === 'False') {
      isCorrectAnswer();
    } else {
      isWrongAnswer();
    }
  $numberQuestion ++;
  updateCounter();
  setQuestion();
  if ($numberQuestion === MAXCOUNT) {
    writeScore();
    return;
  }
}

//CHANGE COLOR IN DIV FIELD
function isCorrectAnswer() {
  $counterCorrectAnswers ++;
  $resultContainer.children[$numberQuestion].classList.add('is-success');
}

function isWrongAnswer() {
  $resultContainer.children[$numberQuestion].classList.add('is-danger');
}


function setQuestion() {
  if ($numberQuestion < questions2.length) {
    $question.innerHTML = questions2[$numberQuestion].question; 
    return;
  }
}

function writeScore() {
  $question.innerText = `You've got ${$counterCorrectAnswers} questions correct, try again?`
}


//LOAD PAGE
function init() {
  $count.innerHTML = '0';
  $numberQuestion = 0;
  $counterCorrectAnswers = 0;
  clearQuestion();
  clearSuccessDanger();
  setQuestion(); 
}

//START PAGE
init();

//EVENTLISTENER
$correctAnswerBtn.addEventListener('click', solveQuestionsClickedTrue);
$wrongAnswerBtn.addEventListener('click', solveQuestionsClickedFalse);
*/



//******FETCH******
//DOM fetching
let $count = document.getElementById('total-correct');
let $numberQuestion = 0;
let $counterCorrectAnswers = 0;
let $resultContainer = document.getElementById('result-container');
let $question = document.getElementById('question');
let $correctAnswerBtn = document.getElementById('answer-true');
let $wrongAnswerBtn = document.getElementById('answer-false');
const MAXCOUNT = 10;



//CLEAR HTML
function updateCounter() {
  $count.innerHTML = $counterCorrectAnswers;
}

function clearSuccessDanger() {
  const $clearClassSuccess = $resultContainer.querySelector('.result.tag.is-success.is-large');
  if ($clearClassSuccess) {
    $clearClassSuccess.classList.remove('is-success');
    $clearClassSuccess.classList.add('is-dark');
  }
  const $clearClassDanger = $resultContainer.querySelector('.result.tag.is-danger.is-large');
  if ($clearClassDanger) {
    $clearClassDanger.classList.remove('is-danger');
    $clearClassDanger.classList.add('is-dark');
  }
}

function clearQuestion() {
  $question.innerHTML = '';
}


//CLICK FUNCTIONS 
function solveQuestionsClickedTrue() {
  fetch ('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean',
  {
    method: 'GET',
  })
  .then(function (response) {
    console.log('response', response);

    if (!response.ok) {
        throw new Error('Request failed');
    }

    return response.json();
})
  .then(function (body) {
       
        let resources = body.results;
        
        let answerQuestion = resources[$numberQuestion].correct_answer;
          if (answerQuestion === 'True') {
            isCorrectAnswer();
          } else {
            isWrongAnswer();
          }

        $numberQuestion ++;
        updateCounter();

        if ($numberQuestion < resources.length) {
          $question.innerHTML = resources[$numberQuestion].question;
        }

        if ($numberQuestion === MAXCOUNT) {
          writeScore();
        }
      
    })
  .catch(function (error) {
      console.log(error);
  });
}


function solveQuestionsClickedFalse() {
  fetch ('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean',
  {
    method: 'GET',
  })
  .then(function (response) {
    console.log('response', response);

    if (!response.ok) {
        throw new Error('Request failed');
    }

    return response.json();
})
  .then(function (body) {
        
        let resources = body.results;
        
        let answerQuestion = resources[$numberQuestion].correct_answer;
          if (answerQuestion === 'False') {
            isCorrectAnswer();
          } else {
            isWrongAnswer();
          }

        $numberQuestion ++;
        updateCounter();

        if ($numberQuestion < resources.length) {
          $question.innerHTML = resources[$numberQuestion].question;  
        }

        if ($numberQuestion === MAXCOUNT) {
          writeScore();
        }
      
    })
  .catch(function (error) {
      console.log(error);
  });
  
}

//CHANGE COLOR IN DIV FIELD
function isCorrectAnswer() {
  $counterCorrectAnswers ++;
  $resultContainer.children[$numberQuestion].classList.add('is-success');
}

function isWrongAnswer() {
  $resultContainer.children[$numberQuestion].classList.add('is-danger');
}


function setQuestion() {
  fetch ('https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=boolean',
  {
    method: 'GET',
  })
  .then(function (response) {
    console.log('response', response);

    if (!response.ok) {
        throw new Error('Request failed');
    }

    return response.json();
})
  .then(function (body) {
        
        let resources = body.results;
        if ($numberQuestion < resources.length) {
          $question.innerHTML = resources[$numberQuestion].question; 
          return;
        } 
    })
  .catch(function (error) {
      console.log(error);
  });
}

function writeScore() {
  $question.innerText = `You've got ${$counterCorrectAnswers} questions correct, try again?`
}


//LOAD PAGE
function init() {
  $count.innerHTML = '0';
  $numberQuestion = 0;
  $counterCorrectAnswers = 0;
  clearQuestion();
  clearSuccessDanger();
  setQuestion();
}

//START PAGE
init();


//EVENTLISTENER
$correctAnswerBtn.addEventListener('click', solveQuestionsClickedTrue);
$wrongAnswerBtn.addEventListener('click', solveQuestionsClickedFalse);





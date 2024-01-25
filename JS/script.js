//PLAY PAGE FOR GETTING INPUT--------------------------------------------------------------------------------------------------------------------
var uInput;

function radioValue(){
    //set array to store radio input value
    uInput = []
    //check when the radio is checked and store in a var
    var catCheck = document.querySelector('[name=radio]:checked')
    var difCheck = document.querySelector('[name=radio1]:checked')
    //push in the var to store the radio values
    uInput.push(catCheck);
    uInput.push(difCheck);
    console.log(uInput);
  }


//set the minus amount from fuel bar 
var minusamt;
// Function to handle button click
function setminusamount(difficulty) {
  // Update the difficultyLevel variable based on the button pressed
  switch (difficulty) {
      case 'easy':
          minusamt = 10;
          break;
      case 'normal':
          minusamt = 20;
          break;
      case 'hard':
          minusamt = 50;
          break;
  }
  // Log the selected difficulty to the console
  sessionStorage.setItem('minusamt', minusamt);
  console.log(`Selected difficulty: ${difficulty}, Minus amount: ${minusamt}`);
}
//event listeners
//only run if the page is 'play' page so check if easy is null
if (document.getElementById('easy') != null){
  document.getElementById('easy').addEventListener('click', function() {
    setminusamount('easy');
  });
  document.getElementById('normal').addEventListener('click', function() {
    setminusamount('normal');
  });
  document.getElementById('hard').addEventListener('click', function() {
    setminusamount('hard');
  });
}
//store this minus amount in the session storage


//make proceed button appear after difficulty selection
function toggleb(){
  let b = document.getElementById("b");
  if (uInput[1] == null){
    b.ariaDisabled = true
  }
  else {
    b.ariaDisabled = false
  }

  e.addEventListener("click", (a) => {
    const value = a.currentTarget.value;
    b.ariaDisabled = false

    if (value === ""){
      b.ariaDisabled = true;
    }
  })

  n.addEventListener("click", (a) => {
    const value = a.currentTarget.value;
    b.ariaDisabled = false

    if (value === ""){
      b.ariaDisabled = true;
    }
  })

  h.addEventListener("click", (a) => {
    const value = a.currentTarget.value;
    b.ariaDisabled = false

    if (value === ""){
      b.ariaDisabled = true;
    }
  })
}
//API--------------------------------------------------------------------------------------------------------------------
//**HAVEN DECIDE WHETHER TO INCLUDE A PLAY AGAIN BUTTON OR LET PLAYER GO OUT OF THE GAME THAN COME BACK IN TO PLAY AGAIN**
//get the Id 'questions' from game.html
const _question = document.getElementById('questions');
//get the class 'quiz-option' from game.html
const _options = document.querySelector('.quiz-options');
//get the id 'correct-score' from game.html
let _correctScore = document.getElementById('correct-score');
//get the id 'total-questions' from game.html
let _totalQuestion = document.getElementById('total-questions');
const _checkBtn = document.getElementById('check-answer');
const _result = document.getElementById('result')
//fuelbar element and fuel percentage
const _fuelBar = document.getElementById('fuelamt')
let fuelpercent = 100
//this would be placed in the other part if the damn API worked
fuelpercent = _fuelBar.style.width
//get numeric value without '%'
let numericValue = parseInt(fuelpercent, 10);
//subtract the minus amount (determined earlier) from the numeric value
//get the minus amount from session storage
minusamt = sessionStorage.getItem('minusamt');
let updatedValue = numericValue - minusamt;
console.log(minusamt)
//set the updated width back to the _fuelBar element
_fuelBar.style.width = updatedValue + '%';

let correctAnswer = " ", correctScore = askedCount = 0, totalQuestion = 10;

//eventlistener to check player's answer when they click on the button check answer
function eventlistener(){
  _checkBtn.addEventListener('click',checkAnswer);
  
}

document.addEventListener('DOMContentLoaded',() =>{
  loadQuestion();
  eventlistener();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
});
async function loadQuestion(){
  /*API link*/
  const APIUrl = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
  /*fetch API*/
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  // console.log(data.results[0]);
  _result.innerHTML = " ";
  showQuestion(data.results[0]);
}

function showQuestion(data){
  _checkBtn.disabled = false
  //assign correct answer to correctAnswer variable
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;
  let optionsList = incorrectAnswer;
  // inserting random answers in random order to the option list
  optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length * 1)), 0, correctAnswer);
  //code to display which category the quiz is in and also display the question
  _question.innerHTML = `${data.question} <br> <span class = "category">${data.category} </span>`;
  _options.innerHTML = `${optionsList.map((option, index) =>
    `<li>${index + 1}. <span>${option}</span></li>`).join('')}`;

    selectOption();
}
//function to display which option the player chose
function selectOption(){
  //loop through each option by selecting 'li'
  _options.querySelectorAll('li').forEach((option) =>{
    //eventlistener to check if user click on any option
    option.addEventListener('click', () => {
      //if statement so that if user click on one option, the class 'selected will be triggered
      if(_options.querySelector('.selected')){
        const activeOption = _options.querySelector('.selected');
        //if user has chose an option previously, the new option will replace the old option and ther new option will brighten while old option will return back to normal state
        activeOption.classList.remove('selected');
      }
      
      option.classList.add('selected');
    });
  });
  //can use console to check fo correct answer
  console.log(correctAnswer);
}

//check answer function
function checkAnswer(){
  _checkBtn.disabled = true;
  //code to store the option the player chose
  if(_options.querySelector('.selected')){
    let selectedAnswer = _options.querySelector('.selected span').
    textContent;
    //if statement to increment correct score whenever player enters correct answer and also print 'Correct Answer!'
    if (selectedAnswer.trim() == HTMLDecode(correctAnswer)){
      correctScore++;
      _result.innerHTML = `<p> <i class = "fas fa-check"></i>Correct Answer!</p>`;
    }
    //else statement to print wrong answer and print the correct answer instead
    else {
      _result.innerHTML = `<p> <i class = "fas fa-times"></i>Incorrect Answer</p>`;
      
    }
    checkCount();
    //else statement to remind the player to select an option before pressing on cehck answer button
  }else{
    _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
    _checkBtn.disabled = false;
  }
}
//Convert html entities to normal text of correct answer if there is
function HTMLDecode(textString){
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}
function checkCount(){
  askedCount++;
  setCount();
  if(askedCount == totalQuestion){
    _result.innerHTML = `<p> Your score is ${correctScore}.</p>`;
    _checkBtn.innerHTML = `<button class="btn btn-outline-light btn-lg p-3" onclick="window.location.href='index.html';">Exit</button>`;
  }else{
    setTimeout(() => {
      loadQuestion()
      //set timeout to 4000 because API has limit of amount of request per unit time
    }, 4000); 
  }
}
function setCount(){
  totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}


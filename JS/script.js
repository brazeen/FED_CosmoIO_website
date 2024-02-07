//PLAY PAGE FOR GETTING INPUT--------------------------------------------------------------------------------------------------------------------

function radioValue(){
  //set array to store radio input value
  var uInput = []
  //check when the radio is checked and store in a var
  var catCheck = document.querySelector('[name=radio]:checked')
  var difCheck = document.querySelector('[name=radio1]:checked')
  var nameinput = document.querySelector('.nameinput')
  var namevalue = ""
  //push in the var to store the radio values
  uInput.push(catCheck);
  uInput.push(difCheck);
  console.log(uInput);
  if (!uInput.includes(null)) {
    nameinput.style.display = "block";
    namevalue = document.getElementById("usernameinput").value
    //store the name value in sessionstorage so that it can be accessed to add it to the leaderboard
    sessionStorage.setItem('username', namevalue);
  }
  console.log(namevalue);
  //make proceed button appear after difficulty selection and username entering
  let b = document.getElementById("playproceedbutton");
  if (namevalue != "") {
    b.style.display = "inline-block";
  } else {
    b.style.display = "none";
  }
}


async function loadGame(){
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
  sessionStorage.setItem('difficulty', difficulty)
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




var APIUrl = '';
function setApiUrl(category) {
  // Update the apiurl variable based on the button pressed
  switch (category) {
      case 'General':
        APIUrl = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
        sessionStorage.setItem('CategoryName', category)
        break;
      case 'Mathematics':
        APIUrl = 'https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple'
        sessionStorage.setItem('CategoryName', category)
        break;
      case 'music':
        APIUrl ='https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple'
        sessionStorage.setItem('CategoryName', category)
        break;
  }
  // Log the selected difficulty to the console
  sessionStorage.setItem('Category', APIUrl);

  console.log(`Selected category: ${category}, API Url: ${APIUrl}`);
}

if (document.getElementById('Mathematics') != null){
  document.getElementById('Mathematics').addEventListener('click', function() {
    setApiUrl('Mathematics');
  });
  document.getElementById('General').addEventListener('click', function() {
    setApiUrl('General');
  });
  document.getElementById('music').addEventListener('click', function() {
    setApiUrl('music');
  });
}


//API--------------------------------------------------------------------------------------------------------------------
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
const _exitBtn = document.getElementById('exit-game')
//fuelbar element and fuel percentage
const _fuelBar = document.getElementById('fuelamt')
let fuelpercent = 100
//points
let gamepoints = 0


let correctAnswer = " ", correctScore = askedCount = 0, totalQuestion = 10;

const proceed_btn = document.getElementById('b')
//eventlistener to check player's answer when they click on the button check answer
function eventlistener(){
  _checkBtn.addEventListener('click',checkAnswer);
  
}

document.addEventListener('DOMContentLoaded',async function(){
  //grab the questions
  APIUrl = sessionStorage.getItem('Category');
  console.log(APIUrl);
  /*fetch API*/
  const result = await fetch(`${APIUrl}`);
  data = await result.json();
  loadQuestion();
  eventlistener();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
  
  _exitBtn.addEventListener('click',function (e){
    e.preventDefault();

    window.location.href = "index.html"; //redirect to index.html after adding the data
  });
  
});
//check for if category and difficulty is selected
function checkSelection() {
  if (uInput[0] == null) {
    alert("Please choose a category");
  }
  else if (uInput[1] == null) {
    alert("Please choose a difficulty")
  }
  else if (uInput == null) {
    alert("Please choose a category and difficult")
  }
}



async function loadQuestion(){

  // console.log(data.results[0]);
  _result.innerHTML = " ";
  console.log(askedCount)
  showQuestion(data.results[askedCount]);
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
      //this would be placed in the other part if the damn API worked
      fuelpercent = _fuelBar.style.width
      //get numeric value without '%'
      let numericValue = parseInt(fuelpercent, 10);
      //subtract the minus amount (determined earlier) from the numeric value
      //get the minus amount from session storage
      minusamt = sessionStorage.getItem('minusamt');
      let updatedValue = numericValue - minusamt;
      if (updatedValue <= 0){
        noFuel();
      }
      console.log(updatedValue)
      //set the updated width back to the _fuelBar element
      _fuelBar.style.width = updatedValue + '%';
      
      
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
    minusamt = sessionStorage.getItem('minusamt');
    //points are calculated by fuel left * the difficulty multiplier (easy is 10, medium is 20, hard is 50)
    gamepoints = parseInt(_fuelBar.style.width, 10) * minusamt
    //keep some variables in sessionstorage in case they need to be accessed in indexscript to add in to database
    sessionStorage.setItem('fuelleft', parseInt(_fuelBar.style.width, 10))
    sessionStorage.setItem('points', gamepoints)
    _question.style.display = "none";
    _options.style.display = "none";
    _result.innerHTML = `<p> You scored ${gamepoints} points. Thanks to your knowledge, Cosmo has successfully returned to Earth!</p>`;
    _checkBtn.style.display = "none";
    _exitBtn.style.display = "block";

    //TO POST DATA TO LEADERBOARD RESTDB API
    const APIKEY = "65bf102f0496a574bb2b4723";
    posting();
    function posting(){
      console.log("a")
      //retrieve form data
        
        let name = sessionStorage.getItem("username");
        let points = sessionStorage.getItem("points");
        let difficulty = sessionStorage.getItem("difficulty");
        let Category = sessionStorage.getItem("CategoryName");
        let fuelleft = sessionStorage.getItem("fuelleft");
        //Get form values
        let jsondata = {
          "name": name,
          "points": points,
          "difficulty": difficulty,
          "Category": Category,
          "fuelleft": fuelleft
        };
        //Create our settings

        var settings = {
          async: true,
          crossDomain: true,
          url: "https://cosmoboard-64b9.restdb.io/rest/playerstats",
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache",
          },
          processData: false,
          body: JSON.stringify(jsondata)
        }
        fetch("https://cosmoboard-64b9.restdb.io/rest/playerstats", settings)
          .then(response => response.json())
          .then(response => {
            console.log(response)
          })
      }
    
  }else{
    setTimeout(() => {
      loadQuestion()
      //set timeout to 4000 because API has limit of amount of request per unit time
    }, 2000); 
  }
}
function setCount(){
  totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
}

//have a function for if the fuel is zero, and remove all the other objects so that it does not load a next question
function noFuel(){
   _question.style.display = "none";
   _options.style.display = "none";
   _result.innerHTML = `<p> You have run out of fuel. Cosmo has died.</p>`;
   _checkBtn.style.display = "none";
   _exitBtn.style.display = "block";
}


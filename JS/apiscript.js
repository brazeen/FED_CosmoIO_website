//PLAY PAGE FOR GETTING INPUT--------------------------------------------------------------------------------------------------------------------
function radioValue(){
    //set array to store radio input value
    var uInput = []
    //check when the radio is checked and store in a var
    var catCheck = document.querySelector('[name=radio]:checked')
    var difCheck = document.querySelector('[name=radio1]:checked')
    //push in the var to store the radio values
    uInput.push(catCheck);
    uInput.push(difCheck);
    console.log(uInput);
  }
//API--------------------------------------------------------------------------------------------------------------------
var category = 'mathematics';
//retrieve data by AJAX from api-ninja
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
    headers: { 'X-Api-Key': 'nz8vVKrPrL7wvqs9iPp1EQ==tvjazCHgm8egFldd'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        var question = result.questions
        for (var i = 0; i < result.length; i++) {
          console.log("Category: " + result[i].category);
          console.log("Question: " + result[i].question);
          console.log("Answer: " + result[i].answer);
        }
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
//print out category, question and answer by using a for loop




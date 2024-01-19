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
      
        
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
//print out category, question and answer by using a for loop
for (var i = 0; i < questions.length; i++) {
  console.log("Category: " + questions[i].category);
  console.log("Question: " + questions[i].question);
  console.log("Answer: " + questions[i].answer);
}


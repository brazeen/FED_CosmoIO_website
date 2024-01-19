//API--------------------------------------------------------------------------------------------------------------------
var category = 'music';
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/trivia?category=' + category,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});



[
    {
      "category": "mathematics",
      "question": "What is the minimum number of integer degrees in a reflex angle?",
      "answer": "181"
    }
  ]
  
  [
    {
      "category": "mathematics",
      "question": "What geometric shape has 4 equal sides",
      "answer": "Square"
    }
  ]
//API--------------------------------------------------------------------------------------------------------------------
var category = 'mathematics';
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
  [
    {
      "category": "mathematics",
      "question": "The mathematical study of properties of lines, angels, etc., is ________.",
      "answer": "Geometry"
    }
  ]
  [
    {
      "category": "mathematics",
      "question": "The angles inside a square total _______ degrees.",
      "answer": "360"
    }
  ]
  [
    {
      "category": "mathematics",
      "question": "What is the minimum number of integer degrees in an acute angle?",
      "answer": "One"
    }
  ]
  [
    {
      "category": "mathematics",
      "question": "Benoit Mandelbrot discovered what mathematical structures?",
      "answer": "Fractals"
    }
  ]
  [
    {
      "category": "mathematics",
      "question": "What is next in the series 1 8 27 ?? 125 216?",
      "answer": "64"
    }
  ]
  [
    {
      "category": "mathematics",
      "question": "What is the square root of 1?",
      "answer": "1"
    }
  ] 
  [
    {
      "category": "mathematics",
      "question": "What is 65% of 60?",
      "answer": "39"
    }
  ]
  [
    {
      "category": "mathematics",
      "question": "How many corners are there in a cube?",
      "answer": "Eight"
    }
  ]
  
 

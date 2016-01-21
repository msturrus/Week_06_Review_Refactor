
//When you click the F to C button, run a function
$('#fahrenheit_to_celsius').on('click', function() {
//defining temp variable, changing input from a string to a float
  var temp = parseFloat($('#temperature').val());
//defining the converted temp as the output of the f to C conversion
  var convertedTemp = (temp - 32) * 5/9;
//runs the "background change" function, detailed later
  backgroundChange(temp);
//if the inputed character is not a number...
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {
//run the adderror function
    addError();
//otherwise select the converted temp result and output it in a reader-friendly fashion
  } else {

    $('#result').html(temp + "&deg;F = " + convertedTemp + "&deg;C");

  }
});


$('#celsius_to_fahrenheit').on('click', function() {

  var temp = parseFloat($('#temperature').val());

  var convertedTemp = temp * 9 / 5 + 32;

  backgroundChange(convertedTemp);

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {

    addError();

  } else {

    $('#result').html(temp + "&deg;C = " + convertedTemp + "&deg;F");

  }
});

//definition of the "background Change" function, which depends on the temp input
function backgroundChange(temp) {
//changes the value of the class attribute of the body, making it blank
  $('body').attr('class', '');
//if the inputed temperature is < 50
  if (temp < 50) {
//add the "cold" class to the body
    $('body').addClass('cold');
//Otherwise, if the temperature is between 50 and 70
  } else if (temp >= 50 && temp <= 70) {
//add the "mild" class to the body
    $('body').addClass('mild');
//otherwise, if the temp is > 70
  } else if (temp > 70) {
//add the "hot"  class to the body
    $('body').addClass('hot');

  }
}

//definition of addError function
function addError() {
//adds the "error" class to the "#temperature" id
  $('#temperature').addClass('error');
//fades in the "error-message" class and prompts the user to "add a value"
  $('.error-message').fadeIn(500).html('Please enter a value.');

}

//This function clears out the results of the "adderror" function
function clearError() {

  $('.error-message').fadeOut(500);

  $('#temperature.error').removeClass('error');

}

//this watches for new user key input
$('#temperature').on('keyup', function() {

  $('#result').html('');

  clearError();

});

// var tempField = 0;

function captureInputTemp() {
	tempField = document.getElementById("initialTemp").value;
	console.log(tempField.value);
}


// Instructions

// Write a program that will convert a temperature from fahrenheit to celsius, 
// or from celsius to fahrenheit.

// Add an event handler to the input field that checks if the user pressed the 
// enter key, and if that happens, perform the conversion. 

// If the temperature is greater than 90F/32C the color of the converted 
// temperature should be red. 
// If the temperature is less than 32F/0C the color of the converted 
// temperature should be blue. 
// For any other temperature, the color should be green. 
var convertedTemp = 0
function toCelsius () {
	// Deduct 32, then multiply by 5, then divide by 9
	convertedTemp = (tempField - 32) * 5 / 9;
	console.log(convertedTemp);
}

function toFahrenheit () {
	// Multiply by 9, then divide by 5, then add 32
	convertedTemp = tempField * 9 / 5 + 32;
	console.log(convertedTemp);
}

// Get a reference to the button element in the DOM 
// Create a button that, when clicked, displays the converted temperature. 
// Create another button that, when clicked, clears any text in the input 
// field.

var button = document.getElementById("converter");
// Assign a function to be executed when the button is clicked 
button.addEventListener("click", getThisPartyStarted);

function getThisPartyStarted(){
	captureInputTemp();
	determineConverter();
}


// This function should determine which conversion should // happen 
// based on which radio button is selected. 
// var fahrenheitToCelcius = document.getElementById("fToC");
// fahrenheitToCelcius.addEventListener("click", clickEvent, true);
// var celciusToFahrenheit = document.getElementById("cToF");
// celciusToFahrenheit.addEventListener("click", clickEvent, false);
function determineConverter() { 
	if (determineConverter === true) {
		toCelsius();
	} else {
		toFahrenheit;
	}
	document.getElementById("results").innerHTML = "<h1>" + convertedTemp + "</h1>";
}

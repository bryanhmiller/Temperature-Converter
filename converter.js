var tempField = 0;
var convertedTemp = 0;

function captureInputTemp() {
	tempField = document.getElementById("initialTemp").value;
	console.log("captureInputTemp tempField",tempField);
	return tempField;
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
function toCelsius () {
	// Deduct 32, then multiply by 5, then divide by 9
	console.log("toCelcius tempField", tempField);
	convertedTemp = (tempField - 32) * 5 / 9;
	console.log("toCelsius convertedTemp", convertedTemp);
	return convertedTemp;
}

function toFahrenheit () {
	// Multiply by 9, then divide by 5, then add 32
	console.log("toFahrenheit tempField", tempField);
	convertedTemp = tempField * 9 / 5 + 32;
	console.log("toFahrenheit convertedTemp", convertedTemp);
	return convertedTemp;
}

// Get a reference to the button element in the DOM 
// Create a button that, when clicked, displays the converted temperature. 
// Create another button that, when clicked, clears any text in the input 
// field.

// Assign a function to be executed when the button is clicked 
var convert = document.getElementById("converter");
convert.addEventListener("click", getThisPartyStarted);
var clear = document.getElementById("clear");
clear.addEventListener("click", clearInput);

function getThisPartyStarted(){
	captureInputTemp();
	determineConverter();
}

function clearInput() {
	console.log("clear Input clicked");
	tempField = 0;
	convertedTemp = 0;
}

// This function should determine which conversion should // happen 
// based on which radio button is selected. 
// var fahrenheitToCelcius = document.getElementById("fToC");
// fahrenheitToCelcius.addEventListener("click", clickEvent, true);
// var celciusToFahrenheit = document.getElementById("cToF");
// celciusToFahrenheit.addEventListener("click", clickEvent, false);
function determineConverter() { 

	var conversionToCelcius = document.getElementById("fahrenheitToCelcius");
	var conversionToFahrenheit = document.getElementById("fahrenheitToCelcius");
	if (conversionToCelcius.checked === true) {
		toCelsius();
	} else if (conversionToFahrenheit.checked === true) {
		toFahrenheit();
	}
	conversionToCelcius.addEventListener("click", toCelsius);
	conversionToFahrenheit.addEventListener("click", toFahrenheit);

	// if (determineConverter === true) {
	// 	toCelsius();
	// } else {
	// 	toFahrenheit;
	// }
	document.getElementById("results").innerHTML = "<h1>" + convertedTemp + "</h1>";
	console.log("results", convertedTemp);
}

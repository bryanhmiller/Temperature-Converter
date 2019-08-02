// Instructions

// Write a program that will convert a temperature from fahrenheit to celsius, 
// or from celsius to fahrenheit.
var tempField = 0;
var convertedTemp = 0;
var conversionFrom = "";
var conversionTo = "";
var conversionToCelsius = document.getElementById("fahrenheitToCelsius");
var conversionToFahrenheit = document.getElementById("celsiusToFahrenheit");
var results = document.getElementById("results");
var convert = document.getElementById("converter");
var clear = document.getElementById("clear");


function captureInputTemp() {
	tempField = document.getElementById("initialTemp").value;
	console.log("captureInputTemp tempField",tempField);
	return tempField;
}

function toCelsius () {
	// Deduct 32, then multiply by 5, then divide by 9
	console.log("toCelsius tempField", tempField);
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

function getThisPartyStarted(){
	captureInputTemp();
	colorOutput();
}

function clearInput() {
	console.log("clear Input clicked");
	tempField = 0;
	document.getElementById("initialTemp").value = "";
	convertedTemp = "";
	results.innerHTML = ""; 
	console.log("tempField", tempField);
	console.log("convertedTemp", convertedTemp);
	conversionToFahrenheit.checked = false;
	conversionToCelsius.checked = false;
}

// This function should determine which conversion should // happen 
// based on which radio button is selected. 
function determineConverter() { 
	if (conversionToCelsius.checked === true) {
		conversionToFahrenheit.checked = false;
		toCelsius();
		conversionFrom = " Farenheit ";
		conversionTo = " Celsius."
	} else if (conversionToFahrenheit.checked === true) {
		conversionToCelsius.checked = false;
		toFahrenheit();
		conversionFrom = " Celsius ";
		conversionTo = " Farenheit."
	}
}

// If the temperature is greater than 90F/32C the color of the converted 
// temperature should be red. 
// If the temperature is less than 32F/0C the color of the converted 
// temperature should be blue. 
// For any other temperature, the color should be green. 
function colorOutput() {
	determineConverter();
	if ((conversionTo == " Celsius." && convertedTemp > 90) || (conversionTo == " Farenheit." && convertedTemp > 32)) {
		results.classlist.add("red");
	}
	convertedTemp = Math.round( convertedTemp *	10) / 10;
	results.innerHTML = "<h1>" + tempField + " degrees " + conversionFrom + " is " + convertedTemp + " degrees " + conversionTo +"</h1>";
	console.log("results", convertedTemp);
}

convert.addEventListener("click", getThisPartyStarted);
clear.addEventListener("click", clearInput);

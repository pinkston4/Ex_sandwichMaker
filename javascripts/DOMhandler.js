"use-strict";
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0.00;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("breadOptions");
var meatChooser = document.getElementById("meatOptions");
var cheeseChooser = document.getElementById("cheeseOptions");
var condimentChooser = document.getElementById("condimentOptions");
var veggieChooser = document.getElementById("veggieOptions");

var submit = document.getElementById("submit");
var preTotal = document.getElementById("output1");
var taxOutput = document.getElementById("output2");
var grandTotal = document.getElementById("output3");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price
  let selectedToppingPrice = SandwichMaker.addBread(selectedTopping);
  finalSandwichPrice = SandwichMaker.addTopping(selectedToppingPrice);
  console.log("bread", finalSandwichPrice);
});

meatChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addMeat(selectedTopping);
	finalSandwichPrice = SandwichMaker.addTopping(selectedToppingPrice);
	console.log("meat", finalSandwichPrice);
});

cheeseChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addCheese(selectedTopping);
	finalSandwichPrice = SandwichMaker.addTopping(selectedToppingPrice);
	console.log("cheese", finalSandwichPrice);
});

condimentChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addCondiment(selectedTopping);
	finalSandwichPrice = SandwichMaker.addTopping(selectedToppingPrice);
	console.log("condiment", finalSandwichPrice);
});

veggieChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	let selectedToppingPrice = SandwichMaker.addVeggie(selectedTopping);
	finalSandwichPrice = SandwichMaker.addTopping(selectedToppingPrice);
	console.log("veggie", finalSandwichPrice);
});

submit.addEventListener("click", function() {
	console.log("running total");
	let tax = finalSandwichPrice * 0.0925;
	let total = finalSandwichPrice + tax;
	console.log(tax);
	console.log(total);
	preTotal.innerHTML += finalSandwichPrice.toFixed(2);
	taxOutput.innerHTML += tax.toFixed(2);
	grandTotal.innerHTML += total.toFixed(2);
});














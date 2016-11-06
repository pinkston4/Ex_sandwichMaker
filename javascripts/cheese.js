"use-strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
  		"american": 0.25,
  		"cheddar": 0.25,
  		"swiss": 0.25,
  		"provolone": 0.25,
  		"pepper-jack": 0.25,
  		"none": 0.00
  };

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
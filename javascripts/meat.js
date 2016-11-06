"use-strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"bacon": 0.75,
  		"ham": 0.25,
  		"turkey": 0.25,
  		"salami": 0.50,
  		"pepporoni": 0.50,
  		"prosciutto": 1.00,
  		"roasted-chicken": 1.00,
  		"flank-steak": 1.00,
  		"prime-rib": 2.00,
  		"none": 0.00
  };

  // Augment the original object with another method
  maker.addMeat = function(meat) {
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
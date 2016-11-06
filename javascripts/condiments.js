"use-strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
  		"mayo": 0.15,
  		"mustard": 0.15,
  		"ketchup": 0.15,
  		"ranch": 0.15,
  		"buffalo-sauce": 0.15,
  		"oil-vinegar": 0.15,
  		"balsamic-vinegaret": 0.25,
  		"none": 0.00
  };

  // Augment the original object with another method
  maker.addCondiment = function(condiment) {
    return condimentPrices[condiment];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
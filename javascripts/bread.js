"use-strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrices = {
  		"none": 0.00,
  		"french": 1.00,
  		"white": 1.00,
  		"whole-grain": 1.75,
  		"kaiser-roll": 1.25
  };

  // Augment the original object with another method
  maker.addBread = function(bread) {
    return breadPrices[bread];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
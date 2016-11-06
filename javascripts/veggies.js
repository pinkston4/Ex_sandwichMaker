"use-strict";
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  		"lettuce": 0.25,
  		"spinach": 0.50,
  		"tomatoe": 0.25,
  		"pickles": 0.25,
  		"onions": 0.25,
  		"hot-cherry-peppers": 0.25,
  		"avocado": 1.00,
  		"bell-peppers": 0.50,
  		"none": 0.00
  };

  // Augment the original object with another method
  maker.addVeggie = function(veggie) {
    return veggiePrices[veggie];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
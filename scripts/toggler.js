//"use strict";

var toggleNextElement = function(className) {
  var _toggleNextElement = function(event) {
    
    var elementToToggle = event.target.nextElementSibling;
    elementToToggle.classList.toggle(className);
  };
  return _toggleNextElement;
};
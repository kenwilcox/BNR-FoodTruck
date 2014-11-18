//"use strict";

var toggleNextElement = function(className, newColor) {
  var _toggleNextElement = function(event) {
    if (!event.shiftKey) {
      var elementToToggle = event.target.nextElementSibling;
      elementToToggle.classList.toggle(className);
    } else {
      var items = [].slice.call(event.path);
      items.forEach(function(item) {
        if (item && item.style) {
          item.classList.toggle(newColor);
        }
      });
    }
  };
  return _toggleNextElement;
};
//"use strict";

var toggleNextElement = function (event) {
  console.log('Something will be toggled.');
  var elementToToggle = event.target.nextElementSibling;
  elementToToggle.classList.toggle('hidden');
};
// Provides transitionend event handler
function transitionEndEventName() {
  var el = document.createElement('div'),
    transitions = {
      'transition': 'transitionend',
      'OTransition': 'otransitioned', // OLE Opere!
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

  for (var i in transitions) {
    if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
      return transitions[i];
    }
  }
}
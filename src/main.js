var scroll = require('./scroll.js');
var obtainInput = require('./obtainInput.js').GrabInput;
var utils = require('./utils.js');


(function(){
  var test = new obtainInput();
    // grabAllTags;
    // addListeners;
  console.log("what is t", test.grabAllTags());
  console.log("Add listeners", test.addListeners());

})();

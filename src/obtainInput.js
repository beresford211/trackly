var utils = require("./utils.js");

module.exports = (function(){

  GrabInput = function() {
    this.listOfInputs = ['input', 'textarea', 'select'];
    this.inputNodes = [];
  };

  GrabInput.prototype.grabAllTags = function() {
    var listOfInputs = ['input', 'textarea', 'select'], inputNodesFound = [], listOfTagsLeng = listOfInputs.length, node;

    for (var i = 0; i < listOfTagsLeng; i++) {
      node = document.getElementsByTagName(listOfInputs[i]);
      node = Array.prototype.slice.call(node);
      inputNodesFound = inputNodesFound.concat(node);
    }
    this.inputNodes = inputNodesFound;
  };

// GrabInput.prototype.extractText = function(){
// };

  GrabInput.prototype.addListeners = function() {
    var inputNodeLeng = this.inputNodes.length;

    for (var i = 0; i < inputNodeLeng; i++) {
      // input
      // utilityfunctions.addListener
      utils.addListener("key event", this.inputNodes[i]);

    }
  };

  return {
    GrabInput : GrabInput
  };

})();


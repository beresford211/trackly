var utils = require("./utils.js");

module.exports = (function(){

  var GrabInput = function() {
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

  GrabInput.prototype.addListeners = function() {
    var inputNodeLeng = this.inputNodes.length, el;

    for (var i = 0; i < inputNodeLeng; i++) {
      el = this.inputNodes[i];
      // utilityfunctions.addListener
      if(el.nodeName === "SELECT"){
        utils.addListener("change", node);
      } else {
        utils.addListener("key event", node);
      }
      console.log("What is this?", node.nodeName);
      // if()
    }
  };

  // GrabInput.prototype.extractText = function(){
  // };

  return {
    GrabInput : GrabInput
  };

})();


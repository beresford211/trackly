var utils = require("./utils.js");
var data = require("./data.js");

 var GrabInput = function() {
    this.listOfInputs = ['input', 'textarea', 'select'];
    this.inputNodes = [];
    this.prevInputValue;
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
        utils.addListener(el, "change", this.extractChange);
      } else {
        utils.addListener(el, "keydown", this.extractText);
      }
    }
    console.log("testing", utils.xPath(el));
  };

  GrabInput.prototype.extractText = function(e) {
    var xpath = utils.xPath(e.srcElement);
    console.log("What is e?", e);
    if(e){
      console.log("what is e", e);
    }
  };

  GrabInput.prototype.extractChange = function(event) {
    var xpath, timeStamp = event.timeStamp, inputValue = event.target.value, extractData = {};
    if(!this.prevInputValue || (this.prevInputValue !== inputValue)) {
      xpath = utils.xPath(event.srcElement);
      this.prevInputValue = inputValue;
      extractData.timeStamp = timeStamp;
      extractData.inputValue = inputValue;
      extractData.xpath = xpath;
      data.postData(extractData);
    }
  };

module.exports = GrabInput;







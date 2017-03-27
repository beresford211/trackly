var utils = require("./../utils.js");
var data = require("./../data.js");
var storage = require("./../storage.js");

 var GrabInput = function() {
    this.inputNodes = [];
    this.prevInputValue = null;
    this.prevOption = null;
    this.prevCheckBox = null;
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
      if(el.nodeName === "SELECT" || el.type === "checkbox") {
        utils.addListener(el, "change", this.extractChange);
      } else {
        // add ability to grab placeholders
        utils.addListener(el, "keydown", utils.throttle(this.extractText, 35, this));
      }
    }
 };

GrabInput.prototype.grabInitial = function() {
  var inputLeng = this.inputNodes.length, currentNode;
  var extractData;
  for(var i = 0; i < inputLeng; i++){
    extractData = {};
    currentNode = this.inputNodes[i];
    extractData.nodeName = currentNode.nodeName;
    extractData.defaultVal = currentNode.value;
    extractData.timeStamp = + new Date();

    if(currentNode.nodeName === "SELECT") {
      extractData.defaultOption = currentNode.selectedOptions;
    }
    if(currentNode.nodeName === "TEXTAREA") {
      extractData.defaultOption = currentNode.selectedOptions;
    }
    if(currentNode.type === "checkbox") {
      extractData.defaultVal = currentNode.checked;
      extractData.nodeName = "INPUTCHECKBOX";
    } else if (currentNode.nodeName === "INPUT") {
      extractData.defaultVal = currentNode.placeholder;
    }
    storage.addToLocalStorage(extractData);
  }
};


 GrabInput.prototype.extractChange = function(e) {
    var option = e.target.value, chkboxOption = e.target.checked, timeStamp = e.timeStamp, extractData = {};

    if(e.target.type === "checkbox") {
      extractData.chkboxOption = chkboxOption;
      this.prevCheckBox = chkboxOption;
    } else if(this.prevOption !== option) {
      extractData.option = option;
      this.prevOption = option;
    }

    extractData.timeStamp = timeStamp;
    extractData.xpath = utils.xPath(e.target);
    storage.addToLocalStorage(extractData);
 };

 GrabInput.prototype.extractText = function(e) {
  var inputValue = e.key, timeStamp = e.timeStamp, extractData = {};

    if(this.prevInputValue !== inputValue) {
      extractData.timeStamp = timeStamp;
      extractData.inputValue = inputValue;
      extractData.xpath = utils.xPath(e.target);
    }
    this.prevInputValue = inputValue;
    storage.addToLocalStorage(extractData);
 };

module.exports = GrabInput;







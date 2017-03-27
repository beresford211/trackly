var utils = require("./utils.js");
var data = require("./data.js");
var storage = require("./storage.js");

 var GrabInput = function() {
    this.inputNodes = [];
    this.prevInputValue = null;
    this.prevOption = null;
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
      if(el.nodeName === "SELECT") {
        utils.addListener(el, "change", this.extractChange);
      } else {
        utils.addListener(el, "keydown", this.extractText);
      }
    }
 };

 GrabInput.prototype.extractChange = function(e) {
   console.log("what is e", e);
    var option = e.target.value, timeStamp = e.timeStamp, extractData = {};

    if(option !== this.prevOption) {
      extractData.option = option;
      extractData.timeStamp = timeStamp;
      extractData.xpath = utils.xPath(e.target);
    }
    this.prevOption = option;
 };

 GrabInput.prototype.extractText = function(e) {
  var inputValue = e.key, timeStamp = e.timeStamp, extractData = {};

    if(!this.prevInputValue || (this.prevInputValue !== inputValue)) {
      extractData.timeStamp = timeStamp;
      extractData.inputValue = inputValue;
      extractData.xpath = utils.xPath(e.target);
      data.postData(extractData);
    }
    this.prevInputValue = inputValue;
    storage.addToLocalStorage(extractData);
 };

module.exports = GrabInput;







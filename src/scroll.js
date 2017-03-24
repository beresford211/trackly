var utils = require("./utils.js");

var DocumentWatcher = function(){
  this.listOfInputs = ['input', 'textarea', 'select'];
  this.inputNodes = [];
};

DocumentWatcher.prototype.grabAllTags = function() {
  var inputNodesFound = [],listOfTagsLeng = this.listOfInputs.length;

  for (var i = 0; i < listOfTagsLeng; i++) {
    this.inputNodes.concat(document.getElementsByTagName(this.listOfInputs[i]));
  }
};

DocumentWatcher.prototype.bindMainEvents = function(){
    utils.addListener(window, "resize", this.resize);
};



DocumentWatcher.prototype.addListeners = function() {
  var inputNodeLeng = this.inputNodes.length;

  for (var i = 0; i < inputNodeLeng; i++) {
    // utilityfunctions.addListener
  }
};

DocumentWatcher.prototype.updateScroll = function(el){

};

DocumentWatcher.prototype.documentSize = function(){
  var windowScreen = window.screen.width,
  windowHeight = window.screen.height;
};

DocumentWatcher.prototype.resize = function(e){


};




DocumentWatcher.prototype.xPath = function(el){
  var xpath = '';
  var pos, el2;
  var posText;

  while(el) {
    pos = 0;
    el2 = el;
    while(el2) {
      if (el2.nodeType === 1 && el2.nodeName === el.nodeName) { // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      el2 = tempitem2.previousSibling;
    }
    posText = "";
    if(pos > 0) {
      posText = "[" + pos + "]";
    }

    xpath = "" + el.nodeName + "" + ( el.id === null ? (pos > 0 ? posText : "" ) + "" : "[@id='" + el.id + "']" + "[" + pos + "]") + "/" + xpath;

    el = el.parentNode;
  }
console.log("what is xpath", xpath);
  // xpath = '/*'+"[name()='"+xml.documentElement.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']"+'/'+xpath;
  // xpath = xpath.replace(/\/$/, '');
  return xpath;
};

module.exports = DocumentWatcher;

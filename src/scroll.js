
var MouseWatcher = function(){
  this.listOfInputs = ['input', 'textarea', 'select'];
  this.inputNodes = [];
};

MouseWatcher.prototype.grabAllTags = function() {
  var inputNodesFound = [],listOfTagsLeng = this.listOfInputs.length;

  for (var i = 0; i < listOfTagsLeng; i++) {
    this.inputNodes.concat(document.getElementsByTagName(this.listOfInputs[i]));
  }
};

MouseWatcher.prototype.addListeners = function() {
  var inputNodeLeng = this.inputNodes.length;

  for (var i = 0; i < inputNodeLeng; i++) {
    // input
    // utilityfunctions.addListener
  }
};

MouseWatcher.prototype.updateScroll = function(el){


};

MouseWatcher.prototype.xPath = function(el){
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

    tempXpath = "" + el.nodeName + "" + ( el.id === null ? (pos > 0 ? posText : "" ) + "" : "[@id='" + el.id + "']" + "[" + pos + "]");

    el = el.parentNode;
  }
  xpath = '/*'+"[name()='"+xml.documentElement.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']"+'/'+xpath;
  xpath = xpath.replace(/\/$/, '');
  return xpath;
};

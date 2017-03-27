var utils = require("./utils.js");
var storage = require("./storage.js");

var DocumentWatcher = function(){
  this.inputNodes = [];
};

DocumentWatcher.prototype.grabHTML = function() {
  var isDocTypeStr = typeof document.docType === "string" ? true : false;
  this.htmlStr = document.body.innerHTML;

};

DocumentWatcher.prototype.bindMainEvents = function() {
  utils.addListener(window, "resize", this.windowSize);
  utils.addListener(window, "scroll", this.updateScroll, true);
  utils.addListener(window, "click", this.clickCapture);
  utils.addListener(window, "beforeunload", utils.removeListeners);
};

DocumentWatcher.prototype.updateScroll = function(e) {
  var eventData = {};

  eventData.scrollTop = window.pageYOffset;
  eventData.scrollLeft = window.pageXOffset;
  eventData.timeStamp = e.timeStamp;
  storage.addToLocalStorage(eventData);
};

DocumentWatcher.prototype.windowSize = function() {
  var eventData = {};

  eventData.windowScreen = document.documentElement.clientWidth;
  eventData.windowHeight = document.documentElement.clientHeight;
  eventData.windowSizeTime = Math.floor(Date.now() / 1000);
  storage.addToLocalStorage(eventData);
};

DocumentWatcher.prototype.clickCapture = function(e){
  var eventData = {}, doc = e.srcElement.getBoundingClientRect();

  eventData.timeStamp = e.timeStamp;
  eventData.xCoordinate = doc.left + e.pageXOffset;
  eventData.xpath = this.xPath(e.target.activeElement);
  eventData.yCoordinate = doc.top + e.pageYOffset;
  storage.addToLocalStorage(eventData);
};

module.exports = DocumentWatcher;

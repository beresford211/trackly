var utils = require("./utils.js");
var storage = require("./storage.js");

var PointerWatcher = function () {
  // this.nodesCollected = [];
  // Originally built this when I was going to use touchevents and other mouse events.
};

PointerWatcher.prototype.bindPointer = function () {
  utils.addListener(window.document.body, "pointermove", utils.throttle(this.captureMovements, 35, this));
};

PointerWatcher.prototype.captureMovements = function (e) {
  var eventData = {};
  if (e.type === "pointermove") {
    eventData.clientX = e.clientX;
    eventData.clientY = e.clientY;
    eventData.timeStamp = e.timeStamp;
    storage.addToLocalStorage(eventData);
  }
};

module.exports = PointerWatcher;

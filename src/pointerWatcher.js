var utils = require("./utils.js");

var PointerWatcher = function(){
};

PointerWatcher.prototype.bindPointer = function() {
  console.log("one", this.captureMovements);
  utils.addListener(window.document.body, "pointermove", this.captureMovements);
};

PointerWatcher.prototype.captureMovements = function(e){
  var eventData = {};
    // utils.addListener(window, "resize", this.resize);
    var area = e.clientX * e.clientY;
    console.log("What is the srcElement" , e.type);
    console.log("What is the srcElement" , e.type);
    return e;
};





module.exports = PointerWatcher;

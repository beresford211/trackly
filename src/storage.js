var utils = require("./utils.js");
var data = require("./data.js");

var Storage = function() {
  this.supportsStorage = null;
};

Storage.prototype.addToLocalStorage = function(addData) {
  var trklyData, tempStorage;

  if(this.supportsStorage) {
    try {
      tempStorage = localStorage.getItem("trackly") || "";
      tempStorage += JSON.stringify(addData);
      localStorage.setItem("trackly", tempStorage);
    } catch (e) {
      if (e.code == 22 || e.code == 1014) {
        console.warn("Storage is full we need to empty it");
        trklyData = localStorage.getItem("trkly");
        data.postData(trklyData);
        localStorage.removeItem("trkly");
      }
    }
  }
};

Storage.prototype.spaceLeft = function() {
    var total = 0;
    for (var x in localStorage) {
        // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
        var amount = (localStorage[x].length * 2) / 1024 / 1024;
        total += amount;
    }
    return total.toFixed(2);
};

Storage.prototype.isLocaleStorageAvailable = function() {
  var isAvailable = window.localStorage || 0;
  if(isAvailable){
    this.supportsStorage = true;
  } else {
    this.supportsStorage = false;
  }
  return isAvailable;
};



modules.export = Storage;
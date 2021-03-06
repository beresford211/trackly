var utils = require("./utils.js");
var data = require("./data.js");

module.exports = (function () {
  var supportsStorage = null, spaceTaken = 0, isAvailable = window.localStorage || 0;
  supportsStorage = isAvailable !== false ? true : false;

  var addToLocalStorage = function (addData) {
    var trklyData, tempStorage;
    if (supportsStorage) {
      try {
        tempStorage = localStorage.getItem("trkly") || "";
        tempStorage += JSON.stringify(addData);
        localStorage.setItem("trkly", tempStorage);
        this.localStorageUsed();
      } catch (e) {
        // browser throws a 22 or 1014 error when local storage is full
        if (e.code == 22 || e.code == 1014) {
          console.warn("Storage is full we need to empty it");
          trklyData = localStorage.getItem("trkly");
          data.postData(trklyData);
          localStorage.removeItem("trkly");
        }
      }
    }
  };

  var localStorageUsed = function () {
    var total = 0;
    for (var x in localStorage) {
      var amount = (localStorage[x].length * 2) / 1024 / 1024;
      total += amount;
    }
    spaceTaken = total.toFixed(2);
  };

  return {
    localStorageUsed: localStorageUsed,
    addToLocalStorage: addToLocalStorage
  };

})();
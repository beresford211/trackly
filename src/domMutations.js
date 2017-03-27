var storage = require("./storage.js");

module.exports = (function () {
    var instance, docBody = document.getElementsByTagName("body");

    function createInstance() {
        var object = new new MutationObserver(function(mutations) {
          var nodes = [];
          storage.addToLocalStorage();
          mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                  var count = list.children.length;
                  list.children[count-1].innerHTML = "Element " + count + " has been injected!";
            }
          });
        });
        return object;
     }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
                instance.observe(docBody, { attributes: true, childList: true, characterData: true });
            }
            return instance;
        },
        updateInstance: function() {

        }
    };
})();




var MutationObserver = window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver;

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
            var count = list.children.length;
          list.children[count-1].innerHTML =
              "Element " + count + " has been injected!";
      }
    });
  });

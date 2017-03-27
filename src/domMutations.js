var storage = require("./storage.js");
var utils = require("./utils.js");

module.exports = (function () {
  var instance, docBody = document.body;


  function createInstance() {
    var object = new MutationObserver(function (mutations) {
      console.log("We have several mutations: ", mutations);
      var eventData = [], event;

      mutations.forEach(function (mutation) {
        event = {};
        event.mutationType = mutation.type;
        event.xpath = utils.xPath(mutation.target);

        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length > 0) {
            event.addedNodes = mutation.addedNodes;
          } else {
            event.removedNodes = mutation.removedNodes;
          }
        }
        if (mutation.type === 'attributes') {
          event.attributeName = mutation.attributeName;
        }
        eventData.push(event);
      });

      storage.addToLocalStorage(eventData);
    });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
        instance.observe(docBody, {attributes: true, childList: true, subtree: true});
      }
      return instance;
    },
    killInstance: function () {
      instance.disconnect();
    }
  };
})();





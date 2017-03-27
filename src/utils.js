module.exports = (function(){

  var polyBind = function(func, context) {
    var arr = Array.prototype.slice.call(arguments, 2);
    
    return function() {
      var args = Array.prototype.slice.call(arguments);
      var fin = arr.concat(args);
      return func.apply(context, fin);
    };
  };

  var addListener = function(node, eventName, result) {
    node.addEventListener(eventName, result);
  };

  var addListenerById = function(eventName, id, result) {
    if(!id){
      console.log("No tag was added in addListenerById, Id is :", id);
      return;
    }
    var node = document.getElementById(id);
    node.addEventListener(eventName, result);
  };

  var addListenerByTag = function(eventName, id, result) {
    if(!tag){
      console.log("No tag was added in addListenerByTag, Tag is :",tag);
      return;
    }
    var node = document.getElementById(id);
    node.addEventListener(eventName, result);
  };

  var xPath = function(el){
    var xpath = '';
    var pos, el2, posText, flag;
    while(el) {
      console.log("waht is the el id", el.id);
      pos = 0;
      el2 = el;
      flag = false;
      while(el2) {
        if (el2.nodeType === 1 && el2.nodeName === el.nodeName && flag) { // If it is ELEMENT_NODE of the same name
          pos += 1;
        }
        flag = true;
        el2 = el2.previousSibling;
      }
      posText = pos > 0 ? "[" + pos + "]" : "";
      console.log("waht is el", el, el.id);
      if(el){
        xpath = "" + el.nodeName + "" + ( el.id !== true ? posText + "" : "[@id='" + el.id + "']" + posText) + "/" + xpath;
      }
      el = el.parentNode;
    }
    console.log("xpath", xpath);
    return xpath;
  };

  var throttle = function(fn, threshhold, scope) {
    threshhold = threshhold !== false ? threshhold : (threshhold = 250);
    var last,
        timerId;
        return function () {
          var context = scope || this,
            now = +new Date(),
            args = arguments;

    if (last && now < last + threshhold) {
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
};

  return {
    throttle : throttle,
    polyBind : polyBind,
    addListener : addListener,
    addListenerById : addListenerById,
    addListenerByTag : addListenerByTag,
    xPath : xPath
  };

})();
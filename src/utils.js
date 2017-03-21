module.exports = (function(){
  
  var polyBind = function(func, context){
    var arr = Array.prototype.slice.call(arguments, 2);
    return function(){
      var args = Array.prototype.slice.call(arguments);
      var fin = arr.concat(args);
      return func.apply(context, fin);
    };
  };

  var addListener = function(eventName, node, result){
    node.addEventListener(eventName, result);
    return node;
  };

  var addListenerById = function(eventName, id, result){
    if(!id){
      console.log("No tag was added in addListenerById, Id is :", id);
      return;
    }
    var node = document.getElementById(id);
    node.addEventListener(eventName, result);
  };

  var addListenerByTag = function(eventName, id, result){
    if(!tag){
      console.log("No tag was added in addListenerByTag, Tag is :",tag);
      return;
    }
    var node = document.getElementById(id);
    node.addEventListener(eventName, result);
  };

  return {
    polyBind : polyBind,
    addListener : addListener,
    addListenerById : addListenerById,
    addListenerByTag : addListenerByTag
  };

})();
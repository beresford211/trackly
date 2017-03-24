module.exports = (function(){

  var postData = function(eventData){
   console.log("lets just pretend it sends", eventData);
  };

  return {
    postData : postData
  };
  
})();



module.exports = (function(){

  var GrabDocument = function() {
    this.docType = "";
    this.htmlStr = "";
  };


  GrabDocument.prototype.grabHTML = function() {
    var isDocTypeStr = typeof document.docType === "string" ? true : false;
    this.htmlStr = document.body.innerHTML;

    // if(!isDocTypeStr){
    //
    // }
  };



  // GrabDocument.prototype.grabDocType = function() {
  // };
  //




  return {
    GrabDocument: GrabDocument
  };

})();

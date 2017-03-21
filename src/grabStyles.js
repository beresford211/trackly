// let worker = new Worker('htmlWorker.js');
//
// function exportHTML(){
//   let htmlStr = window.document.body.outerHTML;
//   let dType = document.doctype.name;
//   worker.postMessage({htmlStr: htmlStr, dType: dType });
// };
// exportHTML();
// onmessage = function(){};

//Things to handle
  //Bind event listeners to the window for our code
  //Bind dom mutations
  //Get all of the CSS for each node

GrabExternalSheets = function(){
  this.imgTags = [];
  this.cssSheetsArr = [];
};


GrabExternalSheets.prototype.getTags = function(){
    var listofImgs = document.getElementsByTagName("img");
    var imgUrls = [];

    var listImgLng = listofImgs.length;
    for(var i = 0; i < listLng; i++){
      imgUrls.push(listImgLng[i].src);
    }
    this.imgTags.concat(imgUrls);
};


GrabExternalSheets.prototype.getStyleSheetsLink = function(){
  var cssSheets = [];
  var listofStyleSheets = document.getElementsByTagName("link");
  var listLng = listofStyleSheets.length;

  for(var i = 0; i < listLng; i++) {
    cssSheetsArr.push(listofStyleSheets[i].href);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
};


GrabExternalSheets.prototype.getStyleSheetsStyle = function(){
  var cssSheets = [];
  var listofStyleSheets = document.getElementsByTagName("style");
  var listLng = listofStyleSheets.length;

  for(var i = 0; i < listLng; i++) {
    cssSheetsArr.push(listofStyleSheets[i].outerHTML);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
};

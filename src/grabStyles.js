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

var GrabExternalSheets = function() {
  this.imgTags = [];
  this.cssSheetsArr = [];
  this.externalScripts = [];
  this.localScripts = [];
};

GrabExternalSheets.prototype.getTags = function() {
    var listofImgs = document.getElementsByTagName("img"),
    imgUrls = [],
    listImgLng = listofImgs.length;

    for(var i = 0; i < listImgLng; i++){
      this.imgTags.push(listofImgs[i].src);
    }
};

GrabExternalSheets.prototype.getStyleSheetsLink = function() {
  var cssSheetsArr = [],
  listofStyleSheets = document.getElementsByTagName("link"),
  listLng = listofStyleSheets.length;

  for(var i = 0; i < listLng; i++) {
    console.log("what is it?", listofStyleSheets[i]);
    cssSheetsArr.push(listofStyleSheets[i].href);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
  console.log("What is css getStyleSheetsLink", cssSheetsArr);
};


GrabExternalSheets.prototype.getStyleSheetsStyle = function() {
  var cssSheetsArr = [],
  listofStyleSheets = document.getElementsByTagName("style"),
  listLng = listofStyleSheets.length;

  for(var i = 0; i < listLng; i++) {
    cssSheetsArr.push(listofStyleSheets[i].outerHTML);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
  console.log("What is css getStyleSheetsStyle", cssSheetsArr);
};

GrabExternalSheets.prototype.getScripts = function() {
  var scriptUrls = [],
  listofScripts = document.getElementsByTagName("script"),
  listScriptLng = listofScripts.length,
  scriptData;

  for(var i = 0; i < listScriptLng; i++){
    if(listofScripts[i].src){
      scriptData = listofScripts[i].src;
    } else {
      scriptData = listofScripts[i].outerHTML;
    }
    this.externalScripts.push(scriptData);
  }
};

module.exports = GrabExternalSheets;
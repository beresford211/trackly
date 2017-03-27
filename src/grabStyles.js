var storage = require("./storage.js");

var GrabExternalSheets = function () {
  this.imgTags = [];
  this.cssSheetsArr = [];
  this.externalScripts = [];
  this.localScripts = [];
};

GrabExternalSheets.prototype.grabHTML = function () {
  var htmlStr, isDocTypeStr = typeof document.docType === "string" ? true : false;
  htmlStr = document.body.innerHTML;
  storage.addToLocalStorage(htmlStr);
};


GrabExternalSheets.prototype.getTags = function () {
  var listofImgs = document.getElementsByTagName("img"),
    listImgLng = listofImgs.length;

  for (var i = 0; i < listImgLng; i++) {
    this.imgTags.push(listofImgs[i].src);
  }
};

GrabExternalSheets.prototype.getStyleSheetsLink = function () {
  var cssSheetsArr = [],
    listofStyleSheets = document.getElementsByTagName("link"),
    listLng = listofStyleSheets.length;

  for (var i = 0; i < listLng; i++) {
    console.log("what is it?", listofStyleSheets[i]);
    cssSheetsArr.push(listofStyleSheets[i].href);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
  console.log("What is css getStyleSheetsLink", cssSheetsArr);
};


GrabExternalSheets.prototype.getStyleSheetsStyle = function () {
  var cssSheetsArr = [],
    listofStyleSheets = document.getElementsByTagName("style"),
    listLng = listofStyleSheets.length;

  for (var i = 0; i < listLng; i++) {
    cssSheetsArr.push(listofStyleSheets[i].outerHTML);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
};

GrabExternalSheets.prototype.getScripts = function () {
  var scriptUrls = [],
    listofScripts = document.getElementsByTagName("script"),
    listScriptLng = listofScripts.length,
    scriptData;

  for (var i = 0; i < listScriptLng; i++) {
    if (listofScripts[i].src) {
      scriptData = listofScripts[i].src;
    } else {
      scriptData = listofScripts[i].outerHTML;
    }
    this.externalScripts.push(scriptData);
  }
};

GrabExternalSheets.prototype.sendToStorage = function () {
  var pageData = [this.imgTags, this.cssSheetsArr, this.externalScripts, this.localScripts];
  for (var i = 0; i < pageData.length; i++) {
    storage.addToLocalStorage(pageData[i]);
  }
};


module.exports = GrabExternalSheets;
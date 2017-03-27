var storage = require("./storage.js");

var GrabExtSheets = function () {
  this.imgTags = [];
  this.cssSheetsArr = [];
  this.extScripts = [];
  this.localScripts = [];
};

GrabExtSheets.prototype.grabHTML = function () {
  var htmlStr, isDocTypeStr = typeof document.docType === "string" ? true : false;
  htmlStr = document.body.innerHTML;
  storage.addToLocalStorage(htmlStr);
};


GrabExtSheets.prototype.getTags = function () {
  var listofImgs = document.getElementsByTagName("img"),
    listImgLng = listofImgs.length;

  for (var i = 0; i < listImgLng; i++) {
    this.imgTags.push(listofImgs[i].src);
  }
};

GrabExtSheets.prototype.getStyleSheetsLink = function () {
  var cssSheetsArr = [],
    listofStyleSheets = document.getElementsByTagName("link"),
    listLng = listofStyleSheets.length;

  for (var i = 0; i < listLng; i++) {
    cssSheetsArr.push(listofStyleSheets[i].href);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
  console.log("What is css getStyleSheetsLink", cssSheetsArr);
};


GrabExtSheets.prototype.getStyleSheetsStyle = function () {
  var cssSheetsArr = [],
    listofStyleSheets = document.getElementsByTagName("style"),
    listLng = listofStyleSheets.length;

  for (var i = 0; i < listLng; i++) {
    cssSheetsArr.push(listofStyleSheets[i].outerHTML);
  }
  this.cssSheetsArr.concat(cssSheetsArr);
};

GrabExtSheets.prototype.getScripts = function () {
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
    this.extScripts.push(scriptData);
  }
};

GrabExternalSheets.prototype.sendToStorage = function () {
  var pageData = [this.imgTags, this.cssSheetsArr, this.externalScripts, this.localScripts];
  for (var i = 0; i < pageData.length; i++) {
    storage.addToLocalStorage(pageData[i]);
  }
};


module.exports = GrabExternalSheets;
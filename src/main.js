var scroll = require('./documentWatcher.js');
var GrabInput = require('./userinput/obtainInput.js');
var GrabStyles = require('./grabStyles.js');
var dommutate = require('./domMutations.js');
var Pointer = require('./pointerWatcher.js');
var utils = require('./utils.js');


var inputScript = new GrabInput();
console.log("Get all tags:", inputScript.grabAllTags());
console.log("Add listeners to input tags:", inputScript.addListeners());

//
// var grabPageStyle = new GrabStyles();
//
//
// console.log("gettags",test2.getTags());
// console.log("getStyleSheetsLink",test2.getStyleSheetsLink());
// console.log("getStyleSheetsStyle",test2.getStyleSheetsStyle());
// console.log("getStyleSheetsStyle",test2.getScripts());
//
//
// var poi = new Pointer();
// console.log("bound pointer", poi.bindPointer());

dommutate.getInstance();

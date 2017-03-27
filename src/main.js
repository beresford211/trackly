var scroll = require('./documentWatcher.js');
var ObtainInput = require('./obtainInput.js');
var GrabStyles = require('./grabStyles.js');
var nd = require('./domMutations.js');
var Pointer = require('./pointerWatcher.js');
var utils = require('./utils.js');


//
var test = new ObtainInput();
  // grabAllTags;
  // addListeners;
console.log("what is t", test.grabAllTags());
console.log("Add listeners", test.addListeners());
//
var test2 = new GrabStyles();


console.log("gettags",test2.getTags());
console.log("getStyleSheetsLink",test2.getStyleSheetsLink());
console.log("getStyleSheetsStyle",test2.getStyleSheetsStyle());
console.log("getStyleSheetsStyle",test2.getScripts());


var poi = new Pointer();
console.log("bound pointer", poi.bindPointer());



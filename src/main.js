var DocumentWatcher = require('./documentWatcher.js');
var GrabInput = require('./userinput/grabInput.js');
var GrabExtSheets = require('./GrabExtSheets.js');
var PointerWatcher = require('./pointerWatcher.js');
var domMutationsWatcher = require('./domMutations.js');
var utils = require('./utils.js');


var inputScript = new GrabInput();
console.log("Get all tags:", inputScript.grabAllTags());
console.log("Add listeners to input tags:", inputScript.addListeners());


var grabSheets = new GrabExtSheets();
console.log("gettags", grabSheets.getTags());
console.log("getStyleSheetsLink", grabSheets.getStyleSheetsLink());
console.log("getStyleSheetsStyle", grabSheets.getStyleSheetsStyle());
console.log("getScripts", grabSheets.getScripts());
console.log("Send scripts and sheets to storage", grabSheets.sendToStorage());


var pointerTracker = new PointerWatcher();
console.log("bound pointer", pointerTracker.bindPointer());

dommutate.getInstance();




// var inputScript = new GrabInput();
// var scriptMethods = [grabAllTags, addListeners];
//
// var grabPageStyle = new GrabStyles();
// var methodList = [getTags, getStyleSheetsLink, getStyleSheetsStyle, getScripts];
//
// var runFunctions= function(constrcter, methods){
//   for(var i = 0; i < methods.length; i++){
//     var it =  constrcter[methods[i]]
//     console.log("waht is it", it);
//   }
// };
//
// runFunctions(new GrabInput(), scriptMethods);
// runFunctions(new new GrabStyles(), methodList);



// CommonJs, every file is module(by default)
// Modules - Encapsulated code (only share minimum)

// importing modules
const names = require("./4-name")
const sayHi = require("./5-utils");
const data = require("./6-alternativeFlavor");
require("./7-mind-grenade"); // we can import without exporting and function will get invoked

// console.log(data);

// console.log(names);

sayHi("susan"); 
sayHi(names.john);
sayHi(names.peter);
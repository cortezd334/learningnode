//in node there isn't a window object
//in client side declaring variables/functions are added to window obj
//which is in the global spoke

//instead node.js uses global object
//every file is known in a module and only available in that module
//if want to use variable/function globally you have to purposely export it

//to load module must require it
// const logger = require('./logger') //.js can follow but not necessary as node assumes it's JS
//returns obj that is exported from this target module
// console.log(logger)
//shows that there is the log function
// logger.log('message')
//have access to the logger and the log function in app.js

//can use jshint to help catch errors (currently not installed)
//in terminal $ jshint app.js 


//just the function instead of obj as above 
const log = require('./logger')
log('message')
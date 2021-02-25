var url = 'http://mylogger.io/log';

function log(message) {
    //send an http request
    console.log(message);
}

// module.exports.log = log;
//adding method log to exports obj = to log function

// module.exports.endPoint = url;
//left side what it will be referenced to outside this module
//right side what it is named in this module



//   to export just a function
module.exports = log;

//node does not execute our code directly
//it wraps it in function below (module wrapper function)

//(function(exports, require, module, __filename, __dirname) {
    //our code here
// })

//still only available w/in module scope
//when setting exports obj can write as
//exports.log = log;
//can not use the shortcut for functions 
//e.g. exports = log; 
//^ is actually trying to make module.exports equal the function rather than be exported
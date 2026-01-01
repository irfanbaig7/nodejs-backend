// Learn about path(files ka address) module

const path = require("path"); 

// we want current directory name
console.log("Directory name : ", path.dirname(__filename))

// we want current file name
console.log("File name : ", path.basename(__filename))

// get flle extention
console.log("Ext name", path.extname(__filename))

// joined path
const joinedPath = path.join('/user', 'documents', 'node', 'products')
console.log( "Joined path  : ", joinedPath);


// resolve path
const resolvePath = path.resolve('user', 'docs', 'node', 'prj')
console.log( "resolve path : ", resolvePath);

// noramalize path (simplifying the path)
const noramalizePath = path.normalize("/user/.documents/../node/products")
console.log(" noramzlize path ", noramalizePath);






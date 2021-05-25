const fs = require('fs'); 									//file system module in Node
fs.watch('target.txt', function() {							//the callback
console.log("File 'target.txt' just changed!");
});
console.log("Now watching target.txt for changes...");
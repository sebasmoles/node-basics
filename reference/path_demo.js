const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename)); // If you want to access a specific property just add '.property';

// Concatenate paths 
console.log(path.join(__dirname, 'test', 'hello.html')); 


// There are many more methods that you can use with this module. The above are the most commonly used.
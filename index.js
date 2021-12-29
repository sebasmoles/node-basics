// Example for person.js
// const Person = require('./person');

// const person1 = new Person('Sebastian', 22);

// person1.greeting();




// Example for logger.js
// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data));

// logger.log('Hello Events!');


// Final example
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('<h1>Hello World!</h1>'); 
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Example for person.js
// const Person = require('./person');

// const person1 = new Person('Sebastian', 22);

// person1.greeting();

// Example for logger.js
const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello Events!');

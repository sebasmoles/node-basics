const os = require('os');

// Get platform
console.log(os.platform());

// Get CPU Arch
console.log(os.arch());

// Get CPU core info
console.log(os.cpus());

// Get free memory
console.log(os.freemem());

// Get total memory
console.log(os.totalmem());

// Get home dir
console.log(os.homedir());

// Get uptime (in seconds)
console.log(os.uptime());  
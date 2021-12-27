const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
console.log(myUrl.hostname); // Difference with '.host' is simply that '.hostname' does not include the port (if any)

// Pathname
console.log(myUrl.pathname);

// Serialized query (displays URL query parameters as a STRINGS)
console.log(myUrl.search);

// Params object (URL query parameters as an OBJECT)
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('key', 'value');
console.log(myUrl.searchParams);
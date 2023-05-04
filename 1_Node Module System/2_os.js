const os = require('os');

console.log('Architechture:',os.arch());

console.log('Operating System:',os.platform());

console.log('Network Details:',os.networkInterfaces());

console.log('CPU Details:',os.cpus());

console.log('Memory Details:',os.totalmem());

console.log('Free Memory:',os.freemem());
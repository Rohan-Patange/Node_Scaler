//Child Processing

const cp = require('child_process');  

// cp.execSync('google-chrome https://www.scaler.com/topics');

console.log('Output' + cp.execSync('node demo.js'));
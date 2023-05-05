const figlet = require('figlet');

figlet("Rohan Patange!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  figlet("Hello World");
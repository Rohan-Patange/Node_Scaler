//Import File System
const fs = require('fs');

//Files

// reading a file from the filesystem
let fileContent = fs.readFileSync('sample_2.txt');
console.log('Data of File 1:' + fileContent);


//Writing a file 
fs.writeFileSync('sample_2.txt', 'I am Sample file');
console.log('Data of File 1 After Insertion:' + fs.readFileSync('sample_2.txt'));


//Append a file
fs.appendFileSync('sample_3.txt', 'I am Sample file');
console.log('Data of File 1 After Insertion:' + fs.readFileSync('sample_3.txt'));


//delete the file
fs.unlinkSync('sample_3.txt');
console.log('File Deleted');


/*------------------------------------------------------------------------------------------------*/

//Directories

//create a directory
fs.mkdirSync('TestDirectory');

//check the contents of the directory
let folderPath = '/home/rohan/Node Samples/1_Node Module System/TestDirectory'

console.log('Folder Content:' , fs.readdirSync(folderPath));

//check if the directory exists or not
console.log('Checking directory existence:',fs.existsSync(folderPath));

//delete the directory
console.log('Deleting the directory:',fs.rmdirSync(folderPath));
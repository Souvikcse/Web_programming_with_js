const fs= require('fs');

fs.writeFile('file1.txt', "Trying out file system", function (err) {
    if(err) throw err;

    console.log("File was successfully created");
})